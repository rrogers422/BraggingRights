const router = require('express').Router();
const { Bet, User, UserBet } = require('../../models');
const withAuth = require('../../utils/auth');


// Route to get all active bets for current user
router.get('/active', async (req, res) => {
    try {
        const bets = await Bet.findAll({
            where: {user_id: 1, status: "accepted" },
            attributes: { exclude: ['status', 'id', 'user_id', 'challenger_id'] },
            include: [{model: User, through: {attributes: []}, attributes: { exclude : ['id', 'email', 'password']}}],  
        });
        const deBets = bets.map((i) => i.get({ plain: true }));
        // const data = [];
        // for (let i=0; i<deBets.length; i++) {
        //     const user1 = users[0].username;
        //     const user2 = users[1].username;
        //     data.push(terms,prize,user1,user2)
        // }
        res.render('bet', {deBets});
    } catch (err) {
        res.status(400).json(err.message);
    }
});

//route for getting bets by user id

router.post('/', withAuth, async (req, res) => {
    try {
        const createBet = await Bet.create({
            ...req.body,
        user_id: req.session.user_id})
        res.status(200).json(createBet);
    } catch (err) {
        res.status(400).json(err);
    }
});





module.exports = router;