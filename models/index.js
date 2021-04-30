const Bet = require('./Bet');
const History = require('./History');
const User = require('./User');

Bet.belongsToMany(User);

History.belongsTo(User);

