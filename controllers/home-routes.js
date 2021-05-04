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
  
  

module.exports = router;
