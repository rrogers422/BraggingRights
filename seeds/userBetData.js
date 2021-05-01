const UserBet = require('../models/UserBet');

const userbetdata = [
    {
        user_id: 1,
        bet_id: 1,
    },
    {
        user_id: 2,
        bet_id: 1,
    },
    {
        user_id: 3,
        bet_id: 2,
    },
    {
        user_id: 4,
        bet_id: 2,
    },
    {
        user_id: 3,
        bet_id: 3,
    },
    {
        user_id: 1,
        bet_id: 3,
    },
];

const seedUserBet = () => UserBet.bulkCreate(userbetdata);

module.exports = seedUserBet;