module.exports = function (sequelize, Model, DataTypes) {
  class ProductImages extends Model {}
  ProductImages.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      path: {
        type: DataTypes.TEXT,
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "productImages",
    }
  );
  return ProductImages;
};
