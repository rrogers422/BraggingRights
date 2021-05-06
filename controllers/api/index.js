const router = require('express').Router();

const historyRoutes = require('./history-routes');
const betRoutes = require('./bet-routes');
const statsRoutes = require('./stats-routes');

router.use('/history', historyRoutes);
router.use('/bets', betRoutes);
router.use('/stats', statsRoutes);

module.exports = router;