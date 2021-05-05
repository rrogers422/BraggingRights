const UserBet = require('../models/UserBet');

const userbetdata = [
    {
        user_id: 1,
        bet_id: 1,
        username: 'Michael_Scott',
    },
    {
        user_id: 2,
        bet_id: 1,
        username: 'Dwight_Schrute',
    },
    {
        user_id: 3,
        bet_id: 2,
        username: 'Toby_Flenderson',
    },
    {
        user_id: 4,
        bet_id: 2,
        username: 'Kelly_Kapoor',
    },
    {
        user_id: 3,
        bet_id: 3,
        username: 'Toby_Flenderson',
    },
    {
        user_id: 1,
        bet_id: 3,
        username: 'Michael_Scott',
    },
    {
        user_id: 1,
        bet_id: 4,
        username: 'Michael_Scott',
    },
    {
        user_id: 3,
        bet_id: 4,
        username: 'Toby_Flenderson',
    },
];

const seedUserBet = () => UserBet.bulkCreate(userbetdata);

module.exports = seedUserBet;