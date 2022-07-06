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
      products: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      total: {
        type: DataTypes.INTEGER,
      },
      state: {
        type: DataTypes.INTEGER,
      },
      firstname: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      creationDate: {
        type: DataTypes.STRING(),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
