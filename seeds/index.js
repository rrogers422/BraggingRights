const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedBets = require('./betData');

const seedAll = async () => {
    await sequelize.sync({force: true});

    await seedUsers();

    await seedBets();

    process.exit(0);
};

seedAll();