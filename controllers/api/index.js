const router = require('express').Router();

const historyRoutes = require('./history-routes');

const betRoutes = require('./bet-routes');

router.use('/history', historyRoutes);

router.use('/bets', betRoutes);

module.exports = router;