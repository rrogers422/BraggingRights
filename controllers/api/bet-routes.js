const router = require('express').Router();
const Bet = require('../../models/Bet');
const { bet } = require('../../models/Bet');

router.get('/', async (req, res) => {
    try {
        const betData = await Bet.create(req.body);

        req.session.save(() => {
        res.status(200).json(betData);
    } catch (err) {
        res.status(500).json(err);
    }
}
);

router.post('/', async (req, res) => {
    try {
        const betData = await Bet.findOne({ where: {}})
    }
})