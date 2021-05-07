const Bet = require('./Bet');
const History = require('./History');
const User = require('./User');

User.hasMany(Bet, {
    foreignKey: 'user_id'
})

Bet.belongsTo(User);

History.belongsTo(User);

module.exports = {
    Bet,
    History,
    User,
  };
