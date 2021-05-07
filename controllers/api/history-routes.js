const router = require('express').Router();
const { User, Bet, History } = require('../../models');
const withAuth = require('../../utils/auth');
const { Op } = require("sequelize");

router.get('/', withAuth,async (req, res) => {
  try{
    const betHistoryData = await History.findAll({
      where: {
        user_id: req.session.user_id,
      },
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
  res.render('history', { bets ,
    logged_in: req.session.logged_in});

  }catch (err) {
    res.status(500).json(err.message);
  }
});

router.put('/status/wins/:id', withAuth, async (req, res) => {
  try {
  const newWin = await History.increment('wins', { where: { user_id: req.session.user_id}});
  const updStatus = await Bet.update({status: 'Completed'}, {where: {id: req.params.id}});
  res.redirect('/');
  
} catch(err) {
  res.status(500).json(err.message);
}
});

router.put('/status/losses/:id', withAuth, async (req, res) => {
  try {
    const newLoss = await History.increment('losses', { where: { user_id: req.session.user_id}})
    const updStatus = await Bet.update({status: 'Completed'}, {where: {id: req.params.id}});
    res.redirect('/');
  } catch(err) {
    res.status(500).json(err.message);
  }
})

module.exports = router;