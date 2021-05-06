const router = require('express').Router();

const historyRoutes = require('./history-routes');
const betRoutes = require('./bet-routes');
const statsRoutes = require('./stats-routes');
const userRoutes = require('./user-routes');



router.use('/history', historyRoutes);
router.use('/bets', betRoutes);
router.use('/stats', statsRoutes);
router.use('/users', userRoutes)

module.exports = router;