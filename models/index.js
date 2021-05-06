const Bet = require('./Bet');
const History = require('./History');
const User = require('./User');
const UserBet = require('./UserBet');

Bet.belongsTo(User);

History.belongsTo(User);


module.exports = {
    Bet,
    History,
    User,
    UserBet,
  };
