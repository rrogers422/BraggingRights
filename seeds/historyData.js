const History = require('../models/History');

const historydata = [
    {
        wins: 3,
        losses: 4,
        user_id: 1,
        bet_id: 2,
    },
    {
        wins: 1,
        losses: 4,
        user_id: 2,
        bet_id: 1,
    },
    {
        wins: 5,
        losses: 2,
        user_id: 3,
        bet_id: 3,
    },
];

const seedHistory = () => History.bulkCreate(historydata);

module.exports = seedHistory;
