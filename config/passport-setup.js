const passPort = require('passport');
const googleStrategy = require('passport-google-oauth20');
const keys = require('./keys');
const User = require('../models/user-model')



passPort.serializeUser((user, done) => {
    done(null, user.id)
})


//we are only sendin back the id of the user
passPort.deserializeUser((id, done) => {
    User.findById(id).then((user) => { done(null, user) })
})
passPort.use(
    new googleStrategy({

        //options for Google strategy
        callbackURL: '/auth/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret

    }, (accessToken, refreshToken, profile, done) => {
        //passport callback function
        //through accessToken --> we can access more detail about user
        //profile --> is the main thing that brings back all info to us
        console.log("This MiddleWare is reached and is about to fetch the Info from Google");
        // console.log(profile);
        const googleID = profile.id;
        console.log(profile);
        User.findOne({ googleId: googleID })
            .then(
                (currUser) => {
                    if (currUser) {
                        console.log("Current user: " + currUser);
                        done(null, currUser)
                    }
                    else {
                        new User({
                            username: profile.displayName,
                            googleId: profile.id,
                            thumbnail: profile._json.picture
                        }).save()
                            .then((newRecord) => {
                                console.log("New User Created : " + newRecord);
                                done(null, newRecord);
                            })
                    }
                }
            )
    }
    ))