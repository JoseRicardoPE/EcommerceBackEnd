module.exports = function (sequelize, Model, DataTypes) {
  class ProductImages extends Model {}
  ProductImages.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      path: DataTypes.STRING(200),
    },
    {
      sequelize,
      modelName: "productImages",
    }
  );
  return ProductImages;
};
