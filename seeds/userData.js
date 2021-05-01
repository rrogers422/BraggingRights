const User = require('../models/User');

const userdata = [
    {
        first_name: 'Michael',
        last_name: 'Scott',
        email: 'no1Boss@DunderMifflin.com'
    },
    {
        first_name: 'Dwight',
        last_name: 'Shrute',
        email: 'asstRegionalManager@DunderMifflin.com'
    },
    {
        first_name: 'Toby',
        last_name: 'Flenderson',
        email: 'HRRep@DunderMifflin.com'
    },
    {
        first_name: 'Kelly',
        last_name: 'Kapoor',
        email: 'marryMeRyan@DunnerMifflin.com'
    }
];
    
const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;