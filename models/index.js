const Bet = require('./Bet');
const History = require('./History');
const User = require('./User');
// const UserBet = require('./UserBet');

// Bet.belongsToMany(User, {
//     through: UserBet,
// });

// User.belongsToMany(Bet, {
//     through: UserBet
// });

User.hasMany(Bet, {
    foreignKey: 'user_id'
})

Bet.belongsTo(User);

History.belongsTo(User);
History.belongsTo(Bet);


module.exports = {
    Bet,
    History,
    User,
  };
