module.exports = function (sequelize, Model, DataTypes) {
  class Order_Product extends Model {}
  Order_Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Order_Product",
    }
  );
  return Order_Product;
};
