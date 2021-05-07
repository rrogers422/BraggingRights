
const router = require('express').Router();
const { User, Bet } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');

router.get('/',withAuth, async(req, res) => {
    let activeBets = await Bet.findAndCountAll({
          where: {
            status: {
              [Op.like]: 'accepted'
            },
            user_id: req.session.user_id
         },

    })
  
    let pendingBets = await Bet.findAndCountAll({
          where: {
            status: {
              [Op.like]: 'Not accepted'
            },
            user_id: req.session.user_id
         },
    })
    res.render('bet-stats', {
      activeBets, 
      pendingBets,
      logged_in: req.session.logged_in});
  })

  module.exports = router;