const router = require('express').Router();
const { Bet, User, UserBet } = require('../../models');
const withAuth = require('../../utils/auth');


// Route to get all active bets for current user
router.get('/bet', withAuth, async (req, res) => {
    try {
        const bets = await Bet.findAll({
            where: { user_id: req.session.user_id, status: "active" },
            });

        const activeBets = bets.map((bet) => bet.get({ plain: true }));
        
        res.render('bet', activeBets);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

//route for getting bets by user id

router.post('/', withAuth, async (req, res) => {
    try {
        const createBet = await Bet.create({
            ...req.body,
        user_id: req.session.user_id})
        res.status(200).json(createBet);
    } catch (err) {
        res.status(400).json(err);
    }
});





module.exports = router;