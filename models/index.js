require('dotenv').config()
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host:process.env.DB_HOST,
    dialect:process.env.DB_DIALECT,
})

const User = require("./User")(sequelize, Model, DataTypes)

module.exports = {sequelize, User}