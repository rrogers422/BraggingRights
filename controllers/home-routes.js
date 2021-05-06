const router = require('express').Router();
const { User, Bet } = require('../models');
const { Op } = require("sequelize");
const axios = require('axios');

// Middleware
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('home');
})
  
// router.get('/', (req, res) =>{
//   let userProfile = {};
//     axios.get('/api/stats/pending/bets',
//     {
//       baseURL: `http://${req.get('host')}`
//     }).then((res) => {
//       console.log(res);
//       userProfile.pending = res;
//     }).catch(function (error) {
//       console.log(error.message);
//     })
    
//   // userProfile.active = await axios.get("/active/bets");
//   // userProfile.wins = await axios.get("/win/bets");
//   // userProfile.loss = await axios.get("/loss/bets");
//   // res.render("home", { userProfile })
// });

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
