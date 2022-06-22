module.exports = function (sequelize, Model, DataTypes) {
  class Tag extends Model {}
  Tag.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
    },
    {
      sequelize,
      modelName: "tag",
    }
  );
  return Tag;
};
