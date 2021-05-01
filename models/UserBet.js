const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserBet extends Model {}

UserBet.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    bet_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'bet',
            key: 'id',
        },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'userbet',
    }
    
    );
<<<<<<< HEAD
    

    module.exports = UserBet;
    
=======

    module.exports = UserBet;
>>>>>>> 8f4df7c438da2847d2d249226acde130825d5c49
