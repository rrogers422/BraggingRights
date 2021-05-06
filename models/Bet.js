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
    terms: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    prize: {
        type: DataTypes.STRING,
        allowNull: false,
    },
<<<<<<< HEAD
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'user',
        key: 'username',
      }
    },
=======
>>>>>>> 33fe83cd0439b288798a53175ecd7a4f3b88213c
    status:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Accepted'
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
