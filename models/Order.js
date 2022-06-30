module.exports = function (sequelize, Model, DataTypes) {
  class Order extends Model {}
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      products: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      total: {
        type: DataTypes.INTEGER,
      },
      state: {
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
