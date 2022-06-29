const { User } = require("../models");

module.exports = async () => {
  const users = [];
  users.push({
    firstname: "Marck",
    lastname: "Zuckerberg",
    img: "https://dircomfidencial.com/wp-content/uploads/2021/10/mark.jpg",
    password: "111",
    email: "marck@zuckerberg.com",
    phone: "123-456-789",
    address: "Avenue 123 43",
    isAdmin: true,
  },
  {
    firstname: "Bill",
    lastname: "Gates",
    img: "https://imagessl.casadellibro.com/img/autores/13189.jpg",
    password: "111",
    email: "bill@gates.com",
    phone: "123-456-789",
    address: "Avenue 123 43",
    isAdmin: true,
  },
  );
  await User.bulkCreate(users);
};



