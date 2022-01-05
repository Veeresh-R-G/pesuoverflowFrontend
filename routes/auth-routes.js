const router = require('express').Router();
const passPort = require('passport')
// auth login
router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    req.logOut();
    res.redirect('/');
});

// auth with google+
router.get('/google', passPort.authenticate('google', {
    scope: ['profile']
}));


//redirect url here this is callback route
//here middleware interacts with the google on the fly
//fetches scope variables mentioned and gives back to us

router.get('/google/redirect', passPort.authenticate('google'), (req, res) => {
    // res.send(req.user);
    res.redirect('/profile');
});
module.exports = router;