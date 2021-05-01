const User = require('../models/User');

const userdata = [
    {
        username: 'Michael_Scott',
        email: 'no1Boss@DunderMifflin.com'
    },
    {
        username: 'Dwight_Schrute',
        email: 'asstRegionalManager@DunderMifflin.com'
    },
    {
        username: 'Toby_Flenderson',
        email: 'HRRep@DunderMifflin.com'
    },
    {
        username: 'Kelly_Kapoor',
        email: 'marryMeRyan@DunnerMifflin.com'
    }
];
    
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;