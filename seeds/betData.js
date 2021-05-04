const Bet = require('../models/Bet');

const betdata = [
    {
        terms: 'Win two games of pool in a row',
        prize: 'Buy dinner',
        user_id: 1,
        challenger_id: 2,
        status:'accepted'
    },
    {
        terms: 'Do not shave beard for 2 months',
        prize: 'Wear opposing team jersey',
        user_id: 3,
        challenger_id: 4,
        status: 'Not accepted'
    },
    {
        terms: 'Get a better grade on the next homework assignment',
        prize: 'Buy a beer',
        user_id: 3,
        challenger_id: 1,
        status:'Won'
    }
];

const seedBets = () => Bet.bulkCreate(betdata);

module.exports = seedBets;