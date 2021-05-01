const router = require('express').Router();

const historyRoutes = require('./history-routes');

router.use('/history', historyRoutes);

module.exports = router;