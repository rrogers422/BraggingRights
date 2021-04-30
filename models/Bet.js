const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bet extends Model {}

Bet.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    terms: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prize: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
    challenger_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },  
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'bet',
}
)

module.exports = Bet;
