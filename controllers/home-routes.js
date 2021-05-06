const router = require('express').Router();
const { User, Bet } = require('../models');
const { Op } = require("sequelize");
const axios = require('axios');

// Middleware
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  
  let activeBets = Bet.findAndCountAll({
    user_id: req.session.user_id,
        where: {
          status: {
            [Op.like]: 'accepted'
          }
       },
  })
  res.render('home', {activeBets});
})


router.get('/login', (req, res) => {
  if(req.session.logged_in){
    res.redirect("/");
    return
  };

  res.render("login")
});

router.get('/add', (req,res) => res.render('add'))


router.get('/signup', (req, res) => {
  if(req.session.logged_in){
    res.redirect("/");
    return
  };

  res.render("signup")
})


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;