require("dotenv").config();
const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectModule: require("pg"),
    logging: false,
  }
);

const User = require("./User")(sequelize, Model, DataTypes);
const Address = require("./Address")(sequelize, Model, DataTypes);
// const Order_Product = require("./Order_Product")(sequelize, Model, DataTypes)
const Order = require("./Order")(sequelize, Model, DataTypes);
const Payment = require("./Payment")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);
const ProductImages = require("./ProductImages")(sequelize, Model, DataTypes);
const Tag = require("./Tag")(sequelize, Model, DataTypes);

User.hasMany(Order)
Order.belongsTo(User)

User.hasMany(Address);
Address.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

Payment.hasMany(Order);
Order.belongsTo(Payment);

Product.hasMany(ProductImages);
ProductImages.belongsTo(Product);

Tag.hasMany(Product);
Product.belongsTo(Tag);

// Order.hasMany(Order_Product);
// Order_Product.belongsTo(Order);

// Product.hasMany(Order_Product);
// Order_Product.belongsTo(Product);

module.exports = {
  sequelize,
  User,
  Address,
  //   Order_Product,
  Order,
  Payment,
  Product,
  ProductImages,
  Tag,
};
