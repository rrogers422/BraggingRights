const History = require('../models/History');

const historydata = [
    {
        wins: 3,
        losses: 4,
        user_id: 1,
    },
    {
        wins: 1,
        losses: 4,
        user_id: 2,
    },
    {
        wins: 5,
        losses: 2,
        user_id: 3,
    },
    {
        wins: 3,
        losses: 0,
        user_id: 4,
    },
];

const seedHistory = () => History.bulkCreate(historydata);

module.exports = seedHistory;
