const router = require('express').Router();
const { User, Bet, History } = require('../../models');
const withAuth = require('../../utils/auth');
const { Op } = require("sequelize");

router.get('/', withAuth, async (req, res) => {
  try{
    const betHistoryData = await History.findAll({
      where: {
        user_id: req.session.user_id
      },

     include: [{
       model: Bet,
       attributes: ['terms', 'prize', 'status']
     },
    {
      model: User,
      attributes: ['username'],
    }] 
    
  });
  res.json(betHistoryData);
  
  }catch (err) {
    res.status(500).json(err.message);
  }
});


module.exports = router;