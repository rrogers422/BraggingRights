const router = require('express').Router();
// const path = require('path');
const { User, History } = require('../../models');

router.get('/', async (req, res) => {
  try{
    const historyData = await History.findAll({
    include: User 
    })
    res.status(200).json(historyData);
  }catch (err) {
    console.log(err.message);
    res.status(500).json(err);
  }
});

module.exports = router;
