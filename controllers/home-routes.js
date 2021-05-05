const router = require('express').Router();
const { User } = require('../models');
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


router.get('/signup', (req, res) => {
  if(req.session.logged_in){
    res.redirect("/");
    return
  };

  res.render("signup")
})
  
  

module.exports = router;