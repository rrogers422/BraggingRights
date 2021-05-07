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

<<<<<<< HEAD
  res.render("login")
});

router.get('/profile', async (req, res) => {
  try {
    const numActiveBets = await Bet.count({where: {user_id: req.session.user_id, status: "Accepted"}});
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

=======
  res.render("signup")
>>>>>>> 33fe83cd0439b288798a53175ecd7a4f3b88213c
})


<<<<<<< HEAD
router.get('/active', async (req, res) => {
  console.log('sd')
  try {
    const bets = await Bet.findAll({
        where: {user_id: req.session.user_id, status: "Accepted" },
        attributes: ['terms','prize','user_id','status'],
        include: [{model: User, through: {attributes: ['username']}, attributes: { exclude : ['id', 'email', 'password']}}],
      });
    
    const deBets = bets.map((i) => i.get({ plain: true }));
    console.log({deBets})
    res.render('bet', {deBets});
  } catch (err) {
      res.status(400).json(err.message);
=======
// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.logged_in) {
    console.log(req.session.logged_in);
    res.redirect('/');
    return;
>>>>>>> 33fe83cd0439b288798a53175ecd7a4f3b88213c
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

<<<<<<< HEAD

router.get('/signup', (req, res) => {
  if(req.session.logged_in){
    res.redirect("/");
    return
  };

  res.render("signup")
})


  
  

=======
>>>>>>> 33fe83cd0439b288798a53175ecd7a4f3b88213c
module.exports = router;