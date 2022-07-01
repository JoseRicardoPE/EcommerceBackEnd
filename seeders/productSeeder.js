const { Product } = require("../models");

module.exports = async () => {
  const products = [
    // CONCENTRADOS:-----------------------------------------------------------------------------------------------------------------------
    {
      name: "Original Coffee Concentrate",
      slug: "original-coffee-concentrate",
      description:
        "Javy Coffee's Original Concentrate is packed with pure coffee deliciousness. It brings together the finest Arabica to produce an ultra-flavorful and ultra-smooth classic coffee taste.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0019_Layer1_1080x.jpg?v=1653585217",
      price: 50,
      stock: 1,
      tagId: 1,
      isOutsiding: true,
    },
    {
      name: "Caramel Coffee Concentrate",
      slug: "caramel-coffee-concentrate",
      description:
        "Javy Coffee's Caramel Concentrate is a delicious classic. Each cup you make will be filled to the brim with the taste of buttery caramel and delicate sweet cream.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0018_Layer2_720x.jpg?v=1653585071",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 1,
      isOutsiding: true,
    },
    {
      name: "French Vanilla Coffee Concentrate",
      slug: "french-vanilla-coffee-concentrate",
      description:
        "Javy Coffee's Vanilla Concentrate is a must-have for coffee lovers. This delicious blend of fine Arabica infused with premium vanilla bean is ultra smooth and satisfying.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0017_Layer3_720x.jpg?v=1653585155",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 1,
      isOutsiding: true,
    },
    {
      name: "Mocha Coffee Concentrate",
      slug: "mocha-coffee-concentrate",
      description:
        "Javy Coffee's Mocha Concentrate is the perfect mix of chocolate and coffee. It is the perfect blend of nutty chocolate-vanilla notes and sweet coffee flavor. To top it off there is just a hint of cinnamon for the perfect Mocha drink!",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0016_Layer4_720x.jpg?v=1653585179",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 1,
      isOutsiding: true,
    },
    {
      name: "Decaf Coffee Concentrate",
      slug: "decaf-coffee-concentrate",
      description:
        "Javy Coffee's Original Decaf Concentrate is packed with pure coffee deliciousness. It brings together the finest Arabica to produce an ultra-flavorful and ultra-smooth classic coffee taste.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/jv__0015_Layer5_720x.jpg?v=1653585115",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 1,
      isOutsiding: false,
    },

    // ACCESORIES :-----------------------------------------------------------------------------------------------------------------------
    {
      name: "Milk Frother",
      slug: "milk-frother",
      description:
        "Javy Milk Frother gives that professional finishing touch to your cold brew, latte, cappuccino, macchiato or hot chocolate.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/frother__0001_DSC06359_720x.jpg?v=1631533003",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 2,
      isOutsiding: false,
    },
    {
      name: "Travel Mug",
      slug: "travel-mug",
      description:
        "The Travel Mug pairs perfectly with Javy for days on the go or if you're heading to your home office and want to keep your coffee hot for endless zoom calls. Enjoy your Javy cold for 24 hours and hot for 12 hours and rep your favorite coffee company while you sip.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/acc_0002_Javy_ecommerce-8_720x.jpg?v=1651240739",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 2,
      isOutsiding: false,
    },
    {
      name: "Mason Jar",
      slug: "mason-jar",
      description:
        "Meet the Javy Mason Jar, your go-to coffee cup to upgrade your daily coffee routines. Whether you fill it with your morning cold brew or your afternoon cappuccino, this Mason jar will make your day more convenient.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/acc_0000_Javy_product_lifestyle1_720x.jpg?v=1651240787",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 2,
      isOutsiding: false,
    },
    {
      name: "Travel Tumbler",
      slug: "travel-tumbler",
      description:
        "The Travel Tumbler is a must-have item for your daily routines, fill it with your morning cold brew or afternoon latte. Enjoy your Javy cold for 24 hours and hot for 12 hours while on the go or spending time at home. The leak-proof lid helps prevent any messes made by kids, pets, or epic adventures.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/acc_0001_Javy_ecommerce-9_720x.jpg?v=1651240750",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 2,
      isOutsiding: false,
    },
    {
      name: "Premium Straw Set",
      slug: "straw-set",
      description:
        "No need to skip the straw with this Premium Straw Set. Sipping on your cold brew just got a whole lot more stylish. Pair it with the Javy Travel Tumbler or Mason Jar for extra convenience and sustainability.",
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/straw_f518ee30-1007-414b-ba21-23460d9d2e99_720x.jpg?v=1651240721",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 2,
      isOutsiding: false,
    },
    {
      name: '"Bring me an iced coffee" Tote Bag',
      slug: "tote-bag",
      description:
        'The "Bring me an iced coffee" Tote Bag is the perfect sustainable accessory for daily adventures, to school, the office, trips to the beach or running errands. Great for carrying your everyday essentials like your phone, keys, Javy Travel Tumbler and Premium Straw Set.',
      path: "https://cdn.shopify.com/s/files/1/0435/8216/1057/products/tote_720x.jpg?v=1651241068",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 2,
      isOutsiding: false,
    },

    // MAKERS :-----------------------------------------------------------------------------------------------------------------------
    {
      name: "French press, Copper",
      slug: "french-press-copper",
      description:
        "Discover the art of the perfect brew with the CHAMBORD French press coffee maker. The French press system is beloved by coffee aficionados worldwide for its simplicity of brewing and purity of taste. And the CHAMBORD is the original and best French press coffee maker.",
      path: "https://orenscoffee.com/wp-content/uploads/2021/12/Bodum_FP-CHAMBORD-Copper-550x550.png",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 3,
      isOutsiding: false,
    },
    {
      name: "French press coffee maker, Silver",
      slug: "french-press-silver",
      description:
        "Discover the art of the perfect brew with the CHAMBORD French press coffee maker. The French press system is beloved by coffee aficionados worldwide for its simplicity of brewing and purity of taste. And the CHAMBORD is the original and best French press coffee maker.",
      path: "https://orenscoffee.com/wp-content/uploads/2021/12/Bodum_FP-CHAMBORD-Silver-550x550.png",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 3,
      isOutsiding: false,
    },
    {
      name: "French press, Black",
      slug: "french-press-black",
      description:
        "Beloved by coffee connoisseurs around the world, Bodum’s iconic French press brewing system offers simplicity of brewing and purity of taste. Our JAVA French press coffee maker has an iconic, retro-style design with all the modern qualities necessary to produce a rich, flavorful brew.",
      path: "https://orenscoffee.com/wp-content/uploads/2021/12/Bodum_FP-JAVA-Black-550x550.png",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 3,
      isOutsiding: false,
    },
    {
      name: "Ode Brew Grinder",
      slug: "brew-grinder",
      description:
        "Ode is a powerful and precise home grinder with café capabilities. Ode was designed to dominate brewed coffee— pour-over, French press, cold brew, and more. With 64mm professional-grade flat burrs, 31 grind settings, and a unique single dose load bin for maximum bean freshness, Ode brings the café experience into your kitchen at a fraction of the cost.",
      path: "https://orenscoffee.com/wp-content/uploads/2021/12/Fellow_Grinder-550x550.png",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 3,
      isOutsiding: false,
    },
    {
      name: "Stagg EKG",
      slug: "stagg-ekg",
      description:
        "The pourover perfected. Whether you’re a coffee aficionado or a brewing beginner, Stagg EKG will be your countertop partner in the pursuit of a ridiculously good cup of coffee.",
      path: "https://orenscoffee.com/wp-content/uploads/2021/04/OC_Product-StaggEKG-black-v3-550x433.png",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 3,
      isOutsiding: false,
    },
    {
      name: "Baratza Encore - Black",
      slug: "baratza-black",
      description:
        "The pourover perfected. Whether you’re a coffee aficionado or a brewing beginner, Stagg EKG will be your countertop partner in the pursuit of a ridiculously good cup of coffee.",
      path: "https://orenscoffee.com/wp-content/uploads/2022/01/BaratzaEncoreGrinder_black-550x550.png",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 3,
      isOutsiding: false,
    },

    // MAKERS :-----------------------------------------------------------------------------------------------------------------------
    {
      name: "Community",
      slug: "coffee-community",
      description:
        "An incredibly smooth, easy drinking cup that honours the growing regions of two long-standing Direct Trade partners. Best enjoyed fresh. Roasted for any brewing method.",
      path: "https://cdn11.bigcommerce.com/s-t53348uibe/images/stencil/1024x1024/attribute_rule_images/1226_source_1621514938.jpg",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 4,
      isOutsiding: false,
    },
    {
      name: "Catalyst - Decaf",
      slug: "coffee-catalyst",
      description:
        "Naturally decaffeinated without compromising quality and brimming with flavour. Pairs excellent with milk. Best enjoyed fresh. Roasted for any brewing method.",
      path: "https://cdn11.bigcommerce.com/s-t53348uibe/images/stencil/1024x1024/attribute_rule_images/126_source_1621514686.jpg",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 4,
      isOutsiding: false,
    },
    {
      name: "Monument",
      slug: "coffee-monument",
      description:
        "A sophisticated expression of a dark roast. Bold, nostalgic and full of character without the acidity or bitterness. Best enjoyed fresh. Roasted for any brewing method.",
      path: "https://cdn11.bigcommerce.com/s-t53348uibe/images/stencil/1024x1024/attribute_rule_images/132_source_1621513887.jpg",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 4,
      isOutsiding: false,
    },
    {
      name: "Academy",
      slug: "coffee-academy",
      description:
        "Elevate your everyday coffee. This crowd-pleaser has just enough acidity and fruitiness to pique your curiosity. Best enjoyed fresh. Roasted for any brewing method.",
      path: "https://cdn11.bigcommerce.com/s-t53348uibe/images/stencil/1024x1024/attribute_rule_images/136_source_1639760015.jpg",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 4,
      isOutsiding: false,
    },
    {
      name: "Heritage",
      slug: "coffee-heritage",
      description:
        "Our signature roast defies all expectations of a 'classic' coffee. Sweet, full-bodied and pairs excellent with milk. Best enjoyed fresh. Roasted for any brewing method.",
      path: "https://cdn11.bigcommerce.com/s-t53348uibe/images/stencil/1024x1024/attribute_rule_images/100_source_1621513050.jpg",
      price: 50,
      stock: Math.floor(Math.random() * (100 - 1)) + 1,
      tagId: 4,
      isOutsiding: false,
    },
  ];
  await Product.bulkCreate(products);
};
