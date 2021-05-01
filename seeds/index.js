const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedBets = require('./betData');
const seedHistory = require('./historyData');
const seedUserBet = require('./UserBetData');

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedUsers();

    await seedBets();

    await seedHistory();

    await seedUserBet();

    process.exit(0);
};

seedAll();