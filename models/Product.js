module.exports = function (sequelize, Model, DataTypes) {
  class Product extends Model {}
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING(200),
      description: DataTypes.TEXT,
      path: DataTypes.STRING(200),
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      isOutsiding: DataTypes.BOOLEAN(),
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return Product;
};
