const router = require('express').Router();
const { Bet, User } = require('../../models');



router.get('/', async (req, res) => {
    try {
        const newBet = await Bet.findAll({
            attributes: ['terms', 'prize'],
            include: [{
                model: User,
                attributes: ['username']
            }]
        })
        res.status(200).json(newBet);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

//route for getting bets by user id

// router.post

module.exports = router;