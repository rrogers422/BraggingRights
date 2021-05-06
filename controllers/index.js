const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const betStatsRoutes = require('./betStats-routes');

router.use('/api',apiRoutes);
router.use('/', homeRoutes);
router.use('/betStats', betStatsRoutes);

module.exports = router;