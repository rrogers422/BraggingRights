const router = require('express').Router();
const { Bet, User, UserBet } = require('../../models');
const withAuth = require('../../utils/auth');


// Route to get all active bets for current user


//route for creating new bets

router.post('/', async (req, res) => {
    try {
        const newBet = await Bet.create({
            terms: req.body.terms,
            prize: req.body.prize,
            username: req.body.username,
            user_id: req.session.user_id,
            });
            res.status(200).json(newBet);
          } 
          catch (err) {
            res.status(400).json(err);
            }
});

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