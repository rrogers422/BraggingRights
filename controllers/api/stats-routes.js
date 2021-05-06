const router = require('express').Router();
const { User, Bet } = require('../../models');
const { Op } = require("sequelize");
// Middleware
const withAuth = require('../../utils/auth');

//Route to get active bets
router.get('/active/bets', async (req,res) =>{
    try{
      const activeBets = await Bet.findAndCountAll({
        user_id: req.session.user_id,
        where: {
          status: {
            [Op.like]: 'accepted'
          }
       },
      //  attributes: ['id', 'count']
      })
      console.log(activeBets);
      let betCount = activeBets.count;
      console.log("betcount is:",betCount )
      res.json(activeBets);
    }catch(err){
      console.log(err.message);
      res.status(500).json(err);
    }
  })
  
  //Route to get no of bet wins
  router.get('/win/bets', withAuth, async (req,res) =>{
    try{
      const activeBets = await Bet.findAndCountAll({
        user_id: req.session.user_id,
        where: {
          status: {
            [Op.like]: 'Won'
          }
       },
      })
      res.json(activeBets.count);
    }catch(err){
      console.log(err.message);
      res.status(500).json(err);
    }
  })
  
  //Route to get no of bet loss
  router.get('/loss/bets', withAuth, async (req,res) =>{
    try{
      const activeBets = await Bet.findAndCountAll({
        user_id: req.session.user_id,
        where: {
          status: {
            [Op.like]: 'Lost'
          }
       },
      })
      res.json(activeBets.count);
    }catch(err){
      console.log(err.message);
      res.status(500).json(err);
    }
  })
  
  //Route to get pending bets
  router.get('/pending/bets', async (req,res) =>{
    try{
      const activeBets = await Bet.findAndCountAll({
        user_id: req.session.user_id,
        where: {
          status: {
            [Op.like]: 'Not accepted'
          }
       },
      })
      res.json(activeBets.count);
    }catch(err){
      console.log(err.message);
      res.status(500).json(err);
    }
  })

module.exports = router;