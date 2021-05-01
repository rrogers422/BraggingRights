const Bet = require('./Bet');
const History = require('./History');
const User = require('./User');
const UserBet = require('./UserBet');

Bet.belongsToMany(User, {
<<<<<<< HEAD
    through: UserBet,
});

User.belongsToMany(Bet, {
    through: UserBet,
=======
    through: UserBet
});

User.belongsToMany(Bet, {
    through: UserBet
>>>>>>> 20555c33ae363e3d462c16fd0f756b38151d53ef
})

History.belongsTo(User);


