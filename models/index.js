const dbConfig = require("../config/dbConfig")();

const { Sequelize, DataTypes } = require("sequelize");

// instance create of sequelize
const sequelize = new Sequelize(
  process.env.DB,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.env.host,
    dialect: process.env.dialect,
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.products = require("./productModel")(sequelize, DataTypes);

db.sequelize
  .sync()
  .then(() => console.log("database connected"))
  .catch((err) => console.log("error in connecting database", err.message));

module.exports = db;
