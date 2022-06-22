const { Tag } = require("../models");

module.exports = async () => {
  const tags = [];

  tags.push(
    {
      name: "Concentrate",
      path: "https://pbs.twimg.com/media/FIQ5K5VWQAMyq0i?format=jpg&name=large",
    },
    {
      name: "Accesories",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/acc_0002_Javy_ecommerce-8_720x.jpg?v=1651240739",
    },
    {
      name: "Makers",
      path: "https://orenscoffee.com/wp-content/uploads/2021/12/Fellow_Grinder-550x550.png",
    }
  );

  await Tag.bulkCreate(tags);
};
