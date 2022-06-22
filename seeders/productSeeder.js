const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "Original Coffee Concentrate",
      slug: "original-coffee-concentrate",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis, saepe alias quaerat modi nisi voluptatibus error id veniam ab perspiciatis pariatur doloremque accusamus eos eius non vitae animi suscipit.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0019_Layer1_1080x.jpg?v=1653585217",
      price: 50,
      stock: 5,
      tagId: 1,
      isOutsiding: true,
    },
    {
      name: "Caramel Coffee Concentrate",
      slug: "caramel-coffee-concentrate",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis, saepe alias quaerat modi nisi voluptatibus error id veniam ab perspiciatis pariatur doloremque accusamus eos eius non vitae animi suscipit.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0018_Layer2_720x.jpg?v=1653585071",
      price: 50,
      stock: 5,
      tagId: 1,
      isOutsiding: true,
    },
    {
      name: "French Vanilla Coffee Concentrate",
      slug: "french-vanilla-coffee-concentrate",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis, saepe alias quaerat modi nisi voluptatibus error id veniam ab perspiciatis pariatur doloremque accusamus eos eius non vitae animi suscipit.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0017_Layer3_720x.jpg?v=1653585155",
      price: 50,
      stock: 5,
      tagId: 1,
      isOutsiding: true,
    },
    {
      name: "Mocha Coffee Concentrate",
      slug: "mocha-coffee-concentrate",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis, saepe alias quaerat modi nisi voluptatibus error id veniam ab perspiciatis pariatur doloremque accusamus eos eius non vitae animi suscipit.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0016_Layer4_720x.jpg?v=1653585179",
      price: 50,
      stock: 5,
      tagId: 1,
      isOutsiding: true,
    },
    {
      name: "Decaf Coffee Concentrate",
      slug: "decaf-coffee-concentrate",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum debitis, saepe alias quaerat modi nisi voluptatibus error id veniam ab perspiciatis pariatur doloremque accusamus eos eius non vitae animi suscipit.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0015_Layer5_720x.jpg?v=1653585115",
      price: 50,
      stock: 5,
      tagId: 1,
      isOutsiding: true,
    },
  ];
  await Product.bulkCreate(products);
};
