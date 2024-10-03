const Sequelize = require("sequelize")

const sequelize = require("../Database/database.js")

const user =  sequelize.define('userDetails',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      username: Sequelize.STRING,
      phoneNumber: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      }
});


module.exports = user;