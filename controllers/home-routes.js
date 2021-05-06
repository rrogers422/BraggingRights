const router = require('express').Router();
const { User, Bet, UserBet } = require('../models');
// Middleware
const withAuth = require('../utils/auth');

//route for home
router.get('/', (req, res) => {
  res.render('home', {
    logged_in: req.session.logged_in
  });
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

})

router.get('/add', (req,res) => res.render('add'))

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
  }
});


router.get('/signup', (req, res) => {
  if(req.session.logged_in){
    res.redirect("/");
    return
  };

  res.render("signup")
})


  
  

module.exports = router;