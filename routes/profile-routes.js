const router = require('express').Router();


const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect('/auth/login');
    } else {
        next();
    }
};
router.get('/', authCheck, (req, res) => {
    // res.send("Welcome this is the profile " + req.user);
    res.render('profile', { user: req.user });
})

module.exports = router;