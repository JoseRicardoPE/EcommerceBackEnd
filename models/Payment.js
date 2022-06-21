module.exports = function (sequelize, Model, DataTypes) {
    class Payment extends Model {}
    Payment.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: DataTypes.STRING(200),
      },
      {
        sequelize,
        modelName: "payment",
      }
    );
    return Payment;
  };
  