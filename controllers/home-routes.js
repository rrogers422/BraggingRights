const router = require('express').Router();
const { User, Bet } = require('../models');
const { Op } = require("sequelize");
const axios = require('axios');


// Middleware
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('home');
})


router.get('/login', (req, res) => {
  if(req.session.logged_in){
    res.redirect("/");
    return
  };

  res.render("login")
});

router.get('/profile', async (req, res) => {
  try {
    const numActiveBets = await Bet.count({where: {user_id: req.session.user_id, status: "accepted"}});
    // // const wins = await History.findOne(
    // //   {where: {user_id: req.session.user_id},
    // //   include: [{attributes: wins}]
    // // })
    // // const losses = await History.findOne(
    // //   {where: {user_id: req.session.user_id},
    // //   include: [{attributes: losses}]
    // // })
    
    res.render('profile', {numActiveBets})
    }
  catch (err){
    res.status(400).json(err);
}

})

router.get('/add', (req,res) => res.render('add'))

router.get('/active', async (req, res) => {
  console.log('sd')
  try {
    const bets = await Bet.findAll({
        where: {user_id: req.session.username, status: "accepted" },
        attributes: { exclude: ['status', 'id', 'user_id', 'challenger_id'] },
        include: [{model: User, through: {attributes: []}, attributes: { exclude : ['id', 'email', 'password']}}],  
      });
    
    const deBets = bets.map((i) => i.get({ plain: true }));

    res.render('bet', {deBets});
  } catch (err) {
      res.status(400).json(err.message);
  }
});


router.get('/signup', (req, res) => {
  if(req.session.logged_in){
    res.redirect("/");
    return
  };

  res.render("signup")
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