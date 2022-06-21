const { User } = require("../models");

module.exports = async () => {
  const users = [];
  users.push({
    firstname: "John",
    lastname: "Doe",
    password: "111",
    email: "john@admin.com",
    phone: "123-456-789",
    address: "Avenue 123 43",
    isAdmin: true,
  },
  {
    firstname: "Ana",
    lastname: "Smith",
    password: "111",
    email: "ana@user.com",
    phone: "123-456-789",
    address: "Avenue 123 43",
    isAdmin: false,
  },
  );
  await User.bulkCreate(users);
};



