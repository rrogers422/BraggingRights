
const router = require('express').Router();
const { User, Bet } = require('../models');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');

router.get('/', async(req, res) => {
  
    let activeBets = await Bet.findAndCountAll({
      user_id: req.session.user_id,
          where: {
            status: {
              [Op.like]: 'accepted'
            }
         },
    })
  
    let pendingBets = await Bet.findAndCountAll({
      user_id: req.session.user_id,
          where: {
            status: {
              [Op.like]: 'Not accepted'
            }
         },
    })
    res.render('bet-stats', {activeBets, pendingBets});
  })

  module.exports = router;