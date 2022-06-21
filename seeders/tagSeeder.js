const { Tag } = require("../models");

module.exports = async () => {
  const tags = [];

  tags.push(
    { name: "Concentrate" },
    { name: "Accesories" },
    { name: "Makers" }
  );

  await Tag.bulkCreate(tags);
};
