module.exports = function (sequelize, Model, DataTypes) {
  class Product extends Model {}
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      slug: {
        type: DataTypes.STRING(200),
        allowNull: false,
        // unique: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      path: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(10, 2), //10 numeros enteros y dos decimales
        allowNull: false
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      isOutsiding:{
        type: DataTypes.BOOLEAN(),
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return Product;
};
