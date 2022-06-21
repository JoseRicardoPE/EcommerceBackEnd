module.exports = function (sequelize, Model, DataTypes) {
  class ProductImages extends Model {}
  ProductImages.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return ProductImages;
};
