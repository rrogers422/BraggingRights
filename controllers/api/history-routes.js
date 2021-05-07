const router = require('express').Router();
const { User, Bet, History } = require('../../models');
const withAuth = require('../../utils/auth');
const { Op } = require("sequelize");

router.get('/', withAuth,async (req, res) => {
  try{
    const betHistoryData = await History.findAll({
      user_id: req.session.user_id,
      attributes:[],
      include: [{
       model: User,
       attributes: ['username'],
     },
     {
      model: Bet,
      attributes: ['terms', 'prize', 'status']
    },
   ] 
  });
  const bets = betHistoryData.map(bet => bet.get({ plain: true }));
  console.log(bets);
  res.render('history', { bets });
  }catch (err) {
    res.status(500).json(err.message);
  }
});
router.get('/win')

module.exports = router;