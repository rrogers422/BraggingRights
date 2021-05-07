
const router = require('express').Router();
const { User, Bet, History } = require('../models');
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

    let winStats = await History.findOne({
      where: {
        user_id: req.session.user_id
      },
      attributes: ['wins'],
    });

    let lossStats = await History.findOne({
      where: {
        user_id: req.session.user_id
      },
      attributes: ['losses'],
    });    

    let wins = winStats.dataValues.wins;
    let losses = lossStats.dataValues.losses;

    res.render('bet-stats', {
      activeBets, 
      wins,
      losses,
      pendingBets,
      logged_in: req.session.logged_in});
  });

  module.exports = router;