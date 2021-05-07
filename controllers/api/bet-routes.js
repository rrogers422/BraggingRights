const router = require('express').Router();
const { Bet, User, UserBet } = require('../../models');
const withAuth = require('../../utils/auth');


// Route to get all active bets for current user
router.get('/active', withAuth, async (req, res) => {
  try {
    const bets = await Bet.findAll({
        where: {user_id: 1, status: "accepted" },
        attributes: ['terms','prize','user_id','status', 'id'],
        // include: [{model: User, through: {attributes: ['username']}, attributes: { exclude : ['id', 'email', 'password']}}],
      });
    
    const deBets = bets.map((i) => i.get({ plain: true }));
    console.log(deBets);
    res.render('bet', {deBets});
  } catch (err) {
      res.status(400).json(err.message);
  }
});

router.get('/pending', withAuth, async (req, res) => {
  try {
    const pBets = await Bet.findAll({
        where: {user_id: 1, status: "Not accepted" },
        attributes: ['terms','prize','user_id','status'],
        // include: [{model: User, through: {attributes: ['username']}, attributes: { exclude : ['id', 'email', 'password']}}],
      });
    
    const pDeBets = pBets.map((i) => i.get({ plain: true }));
    console.log(pDeBets);
    res.render('bet', {pDeBets});
  } catch (err) {
      res.status(400).json(err.message);
  }
});

// router.get('/win', (req, res) => res.)
//route for creating new bets

router.post('/', async (req, res) => {
    try {
        const newBet = await Bet.create({
            terms: req.body.terms,
            prize: req.body.prize,
            user_id: req.session.user_id,
            });
            res.status(200).json(newBet);
          } 
          catch (err) {
            res.status(400).json(err);
            }
});

// router.put('/win', async (req, res) => {
//   try {
//   History.increment (
//     {wins}
//   );
//   }
//   catch (err) {
//     res.status(400).json(err);
//   }
// });

//   router.put('/loss', async (req, res) => {
//     try {
//     History.increment (
//       {losses}
//     );
//     }
//     catch (err) {
//       res.status(400).json(err);
//     }
//   })

// router.get('/numActive', async (req, res) => {
//   try {
//       const num = await Bet.count({where: {user_id: req.session.id, status: "accepted"}});
//       res.status(200).json(num);
//   }
//   catch (err){
//       res.status(400).json(err);
//   }

// })





module.exports = router;