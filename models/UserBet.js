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

    module.exports = UserBet;