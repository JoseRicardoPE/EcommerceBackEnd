const { User } = require("../models");

module.exports = async () => {
  const users = [];
  users.push({
    firstname: "John",
    lastname: "Doe",
    email: "john@example.com",
    phone: "123-456-789",
    address: "Avenue 123 43",
    isAdmin: true,
  });
};

await User.bulkCreate(users);


