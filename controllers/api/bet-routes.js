const router = require('express').Router();
const { Bet, User, UserBet } = require('../../models');
const withAuth = require('../../utils/auth');


router.get('/', async (req, res) => {
    try {
        const newBet = await Bet.findAll({
            attributes: ['terms', 'prize'],
            include: [{
                model: User,
                attributes: ['username'],
                through: {
                    attributes: []
                }
            }],

        })
        res.status(200).json(newBet);
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