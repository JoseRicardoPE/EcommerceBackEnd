const { ProductImages } = require("../models");

module.exports = async () => {
  const productImages = [];

  productImages.push(
    {
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0007_javy_summer22_5d446dbc-5fd6-49ca-9565-374f922ba7f4_1080x.jpg?v=1653585217",
      productId: 1,
    },
    {
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0006_Javy-16_1080x.jpg?v=1653585217",
      productId: 1,
    },
    {
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0003_Javy_january22-2_62341966-a3b1-4162-96f8-01afd870de42_1080x.jpg?v=1653585217",
      productId: 1,
    },
    {
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0002_Javy_januaryII_1080x.jpg?v=1653585071",
      productId: 2,
    },
    {
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0004_Javy_Lifestyle_1080x.jpg?v=1653585071",
      productId: 2,
    }
  );

  await ProductImages.bulkCreate(productImages);
};
