module.exports = function (sequelize, Model, DataTypes) {
  class Tag extends Model {}
  Tag.init(
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
      modelName: "tag",
    }
  );
  return Tag;
};
