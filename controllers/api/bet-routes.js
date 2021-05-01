const router = require('express').Router();
const Bet = require('../../models/Bet');
const { bet } = require('../../models/Bet');



router.get('/', function(req, res){
    res.send({type: 'GET'});
});

router.post('/', function(req,res){
    res.send({type: 'POST'});
});

module.exports = router;