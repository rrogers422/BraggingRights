const router = require('express').Router();
const { Bet, User, UserBet } = require('../../models');
const withAuth = require('../../utils/auth');


// Route to get all active bets for current user
router.get('/active', async (req, res) => {
    try {
        const bets = await Bet.findAll({
            // user_id will be changed to req.session.id when login is working
            where: {user_id: req.session.id, status: "accepted" },
            attributes: { exclude: ['status', 'id', 'user_id', 'challenger_id'] },
            include: [{model: User, through: {attributes: []}, attributes: { exclude : ['id', 'email', 'password']}}],  
        });
        
        const deBets = bets.map((i) => i.get({ plain: true }));

        res.render('bet', {deBets});
    } catch (err) {
        res.status(400).json(err.message);
    }
});

//route for creating new bets

router.post('/', async (req, res) => {
    try {
        const newBet = await Bet.create({
            ...req.body,
            status:'Not accepted',
            user_id: 1,
            UserBet: {

            }
         });
        res.status(200).json(newBet);
    } catch (err) {
        res.status(400).json(err);
    }
});





module.exports = router;