const Sequelize  = require("sequelize")

const sequelize = new Sequelize('booking appointment app','root','vinayarva1306',{
    dialect: 'mysql',
     host: 'localhost',
     port:"3306"
})

module.exports = sequelize;