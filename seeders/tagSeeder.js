const { Tag } = require("../models");

module.exports = async () => {
  const tags = [];

  tags.push(
    {
      name: "Concentrate",
      path: "https://pbs.twimg.com/media/FIQ5K5VWQAMyq0i?format=jpg&name=large",
      description: "bottles of concentrate coffe. different kinds, flavours, brands"
    },
    {
      name: "Accesories",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/acc_0002_Javy_ecommerce-8_720x.jpg?v=1651240739",
      description: "Find the best products to get your coffe to the next level"
    },
    {
      name: "Makers",
      path: "https://orenscoffee.com/wp-content/uploads/2021/12/Fellow_Grinder-550x550.png",
      description: "only the best coffe makers for you, what are you waiting for to get all the power?"
    },
    {
      name: "Ground Coffee",
      path: "https://images.unsplash.com/photo-1510776537653-6d0da167186c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      description: "if you love coffe like we do.. you must get the best ground coffe on market"
    }
  );

  await Tag.bulkCreate(tags);
};
