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
      description: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      path: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
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
