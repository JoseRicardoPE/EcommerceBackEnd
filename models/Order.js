module.exports = function (sequelize, Model, DataTypes) {
  class Order extends Model {}
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cantidad: {
        type: DataTypes.INTEGER,
      },
      total: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
