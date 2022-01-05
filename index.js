const express = require('express')
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const PORT = 3000 || process.env.PORT

//Initialise instance of Express application
const app = express();


//set the view engine
app.set('view engine', 'ejs');

//setting up the cookies configuration --> encrypts the cookie and sends to browser
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // a maximum of 24 hours --> units is milliseconds
    keys: [keys.session.cookieKey]
}))


//Initialize the passport 
app.use(passport.initialize());
app.use(passport.session());


//setting up routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);


//set up home route
app.get('/', (req, res) => {
    res.render('home', { user: req.user });
})


app.listen(3000, () => {
    console.log(`App running on PORT = ${PORT}`)
})