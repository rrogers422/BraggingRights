const Bet = require('./Bet');
const History = require('./History');
const User = require('./User');
const UserBet = require('./UserBet');

Bet.belongsToMany(User, {
    through: UserBet,
});

User.belongsToMany(Bet, {
<<<<<<< HEAD
    through: UserBet
});
=======
    through: UserBet,
})
>>>>>>> 8f4df7c438da2847d2d249226acde130825d5c49

History.belongsTo(User);

module.exports = {
    Bet,
    History,
    User,
    UserBet,
  };
