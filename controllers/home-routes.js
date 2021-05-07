const router = require('express').Router();
const { User, Bet } = require('../models');
const { Op } = require("sequelize");

// Middleware
const withAuth = require('../utils/auth');

router.get('/', (req, res) =>{
  res.render('home', {logged_in: req.session.logged_in});
})

router.get('/signup', (req, res) => {
  if(req.session.logged_in){
    res.redirect("/");
    return
  };

  res.render("signup")
})

router.get('/add', (req,res) => res.render('add', {logged_in: req.session.logged_in}));
// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.logged_in) {
    console.log(req.session.logged_in);
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;