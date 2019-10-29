const express = require('express');
const router = express.Router();
const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

router.get('/signup', isNotLoggedIn, (req, res) => {
    res.render('out/signup');
});

router.post('/signup', isNotLoggedIn, passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/profile', isLoggedIn, (req, res)=>{
    res.render('profile');
});

router.get('/pag701', isLoggedIn, (req, res)=>{
    res.render('forma');
});

router.get('/pag702', isLoggedIn, (req, res)=>{
    res.render('aforma');
});

router.get('/pag703', isLoggedIn, (req, res)=>{
    res.render('extra');
});

router.get('/pag704', isLoggedIn, (req, res)=>{
    res.render('estres');
});

router.get('/logout', (req, res)=>{
    req.logOut();
    res.redirect('/signin');
});

///----------------Login-------------------------
router.get('/signin', isNotLoggedIn, (req, res) => {
    res.render('out/signin');
});

router.post('/signin', isNotLoggedIn, (req, res, next) => {
    passport.authenticate('local.signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: true
    })(req, res, next);
});




// router.post('/signup', (req, res) =>{
//     passport.authenticate('local.signup', {
//         successRedirect: '/profile',
//         failureRedirect: '/signup',
//         failureFlash: true
//     });
//     res.send('ok');
// });
module.exports = router;