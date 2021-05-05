const Bet = require('./Bet');
const History = require('./History');
const User = require('./User');
const UserBet = require('./UserBet');

Bet.belongsToMany(User, {
    through: UserBet,
});

User.belongsToMany(Bet, {
    through: UserBet
});

History.belongsTo(User);


module.exports = {
    Bet,
    History,
    User,
    UserBet,
  };
