const Bet = require('./Bet');
const History = require('./History');
const User = require('./User');

Bet.belongsToMany(User, {
    through: UserBet;
});

User.belongsToMany(Bet, {
    through: UserBet;
})

History.belongsTo(User);


