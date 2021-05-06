const router = require('express').Router();
const { User, History } = require('../../models');

//route to get the wins/losses of a user
router.get('/', async (req, res) => {
  try{
    const historyData = await History.findAll({
      attributes: ['wins', 'losses'],  
    include: [ { 
      model: User,
      attributes: ['username']
  }]
  })
    res.status(200).json(historyData);
  }catch (err) {
    res.status(500).json(err.message);
  }
});
router.get('/win')

module.exports = router;