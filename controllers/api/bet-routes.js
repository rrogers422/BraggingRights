const router = require('express').Router();
const { Bet, History, User } = require('../../models');
const withAuth = require('../../utils/auth');


// Route to get all active bets for current user
router.get('/active', withAuth, async (req, res) => {
  try {
    const bets = await Bet.findAll({
        where: {user_id: req.session.user_id, status: "accepted" },
        attributes: ['id','terms','prize','user_id','status'],
        include: [{
          model: User,
          attributes: ['username']
        }]
      });
    console.log(bets);

    const deBets = bets.map((i) => i.get({ plain: true }));
    console.log(deBets);
    res.render('bet', {deBets, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to display all pending bets
router.get('/pending', withAuth, async (req, res) => {
  try {
    const pBets = await Bet.findAll({
        where: {user_id: req.session.user_id, status: "Not accepted" },
        attributes: ['id','terms','prize','user_id','status'],
      });
    
    const pDeBets = pBets.map((i) => i.get({ plain: true }));
    console.log(pDeBets);
    res.render('pending', {pDeBets, logged_in: req.session.logged_in});
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newBet = await Bet.create({
            terms: req.body.terms,
            prize: req.body.prize,
            user_id: req.session.user_id,
            });
            res.status(200).redirect('/');
          } 
          catch (err) {
            res.status(400).json(err);
            }
});

// Route to update Bet status to "Accepted"
router.put('/status/:id', withAuth, async (req, res) => {
  try {
  const updStatus = await Bet.update({status: 'Accepted'}, {where: {id: req.params.id}});
  res.redirect('/');
} catch(err) {
  res.status(500).json(err.message);
}
});

router.put('/status/wins/:id', withAuth, async (req, res) => {
  try {
  // const addId = await History.update({user_id: req.session.id})
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