const Bet = require('./Bet');
const History = require('./History');
const User = require('./User');
const UserBet = require('./UserBet');

<<<<<<< HEAD
Bet.belongsTo(User);
=======
// Bet.belongsToMany(User, {
//     through: UserBet,
// });

// User.belongsToMany(Bet, {
//     through: UserBet
// });
>>>>>>> 33fe83cd0439b288798a53175ecd7a4f3b88213c

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
    UserBet,
  };
