const User = require('../models/User');

const userdata = [
    {
        username: 'Michael_Scott',
        email: 'no1Boss@DunderMifflin.com',
        password: 'password12345'
    },
    {
        username: 'Dwight_Schrute',
        email: 'asstRegionalManager@DunderMifflin.com',
        password: 'password12345'
    },
    {
        username: 'Toby_Flenderson',
        email: 'HRRep@DunderMifflin.com',
        password: 'password12345'
    },
    {
        username: 'Kelly_Kapoor',
        email: 'marryMeRyan@DunnerMifflin.com',
        password: 'password12345'
    }
];
    
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;