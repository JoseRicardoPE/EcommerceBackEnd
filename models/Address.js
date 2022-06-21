module.exports = function (sequelize, Model, DataTypes) {
    class Address extends Model {}
    Address.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        line_1: DataTypes.STRING(200),
        line_2: DataTypes.STRING(200),
        country: DataTypes.STRING(200),
      },
      {
        sequelize,
        modelName: "address",
      }
    );
    return Address;
  };
  