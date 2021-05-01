const router = require('express').Router();
const Bet = require('../../models/Bet');
const { bet } = require('../../models/Bet');



router.get('/', async (req, res) => {
    try {
        const newBet = await Bet.findAll();
    res.status(200).json(newBet);
    } catch (err) {
        res.status(400).json(err.message);
    }
});

//route for getting bets by user id

router.post

module.exports = router;