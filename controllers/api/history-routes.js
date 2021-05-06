const router = require('express').Router();
const { User, Bet,History, UserBet } = require('../../models');
const withAuth = require('../../utils/auth');
const { Op } = require("sequelize");

router.get('/', withAuth, async (req, res) => {
  try{
    const betHistoryData = await Bet.findAll({
      where: {
        user_id: req.session.user_id
    },
      attributes: ['terms', 'prize', 'status'],
      where: {
        status: {
          [Op.like]: 'Won'
        }
     },  
    include: [ { 
      model: User,
      attributes: ['username']
  }]
  })
  const bets = betHistoryData.map(bet => bet.get({ plain: true }));
  console.log(bets);
  res.render('history', { bets });
  }catch (err) {
    res.status(500).json(err.message);
  }
});


module.exports = router;