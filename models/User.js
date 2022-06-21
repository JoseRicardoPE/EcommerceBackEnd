const bcrypt = require("bcryptjs");

module.exports = function (sequelize, Model, DataTypes) {
  class User extends Model {}
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstname: DataTypes.STRING(200),
      lastname: DataTypes.STRING(200),
      email: { type: DataTypes.STRING(200), unique: true },
      password: DataTypes.STRING(200),
      phone: DataTypes.STRING(200),
      address: DataTypes.STRING(200),
      isAdmin: DataTypes.BOOLEAN(),
    },
    {
      hooks: {
        beforeCreate: async (user, options) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          user.password = hashedPassword;
        },
        beforeBulkCreate: async (users, options) => {
          for (user of users) {
            const hashedPassword = await bcrypt.hash(user.password, 10);
            user.password = hashedPassword;
          }
        },
        beforeUpdate: async (user, options) => {
          const hashedPassword = await bcrypt.hash(user.password, 10);
          user.password = hashedPassword;
        },
      },
      sequelize,
      modelName: "user",
    }
  );
  return User;
};
