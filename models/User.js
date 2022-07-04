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
      firstname: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      img: {
        type: DataTypes.STRING(1000)
      },
      email: {
        type: DataTypes.STRING(200),
        allowNull: false,
        // unique: true
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      address: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      isAdmin: {
        type: DataTypes.BOOLEAN(),
        allowNull: false
      },
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
