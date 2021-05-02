const hbs = require('express-handlebars');

const cookieParser = require('cookie-parser');
const { User } = require('../models');
const express = require('express');
const app = express();

app.use(cookieParser());

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');
    }
    next();
  });
  
  var hbsContent = {username: '', loggedIn: false, title: "Sorry, but you are not logged in at this time.", body: "PLease log in or sign up."};
  var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid){
      res.render('home');
    }
    else {
      next();
    }
}
  
  //route for home
  app.get('/', sessionChecker, async (req, res) => {
    try{
    res.render('home');
    }
    catch(error){console.log(error)}
  })
  
  // route for sign up
  app.route('/signup')
    .get((req, res) => {
      res.render('signup', hbsContent);
    })
    .post((req, res) => {
      User.create({
        username: req.body.username,
        password: req.body.password
      })
      .then(user => {
        req.session.user = user.dataValues;
        res.render('/profile');
      })
      .catch(error => {
        res.render('/signup');
      });
    });
  
    // route for log in
    app.route('/login')
      .get((req, res) => {
      res.render('login', hbsContent);
      })
      .post((req, res) => {
      var username = req.body.username;
      var password = req.body.password;
      
  
      User.findOne({ where: {username: username} })
      .then(function(user) {
        if (!user) {
          res.render('/login');
        }
        else if (!user.validPassword(password)) {
          res.render('/login');
        }
        else {
          req.session.user = user.dataValues;
          res.render('/profile');
        }
      })
    });
  
  // route for user profile
  app.get('/profile', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      hbsContent.loggedIn = true;
      hbsContent.username = req.session.user.username;
      hbsContent.title = "Yay! You are logged in.";
      res.render('/profile', hbsContent);
    }
    else {
      res.render('/login');
    }
  })
  
  // route for log out
  app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
      hbsContent.loggedIn = false;
      hbsContent.title = "Darn! You are logged out.";
      res.clearCookie('user_sid');
      res.render('/');
    }
    else {
      res.render('/login');
    }
  })
  
  // Bad requests
  app.use(function (req, res, next) {
    res.status(404).send("Sorry, but we can't find that!")
  })

  module.exports = app;