const db = require("../models");
const sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');

const publicController = {
  test: (req, res) => {
    res.json("Public Test");
  },

  showAllProduct: async (req, res) => {
    const products = await db.Product.findAll();
    res.json(products);
  },

  productById: async (req, res) => {
    const product = await db.Product.findByPk(req.params.productId);
    res.json(product);
  },
  productByTagId: async (req, res) => {
    const productsByTag = await db.Product.findAll({
      where: { tagId: req.params.tagId },
    });
    res.json(productsByTag);
  },

  imagesByProductId: async (req, res) => {
    const imagesFromProduct = await db.ProductImages.findAll({
      where: { productId: req.params.productId },
    });
    res.json(imagesFromProduct);
  },

  productByOutsiding: async (req, res) => {
    const productsByOutsiding = await db.Product.findAll({
      where: { isOutsiding: true },
    });
    res.json(productsByOutsiding);
  },
  
  login: async (req, res) => {
    const user = await db.User.findOne({ where: { email: req.body.email } });
    if (user) {
      bcrypt.compare(req.body.password, user.password, function (err, check) {
        if (check) {
          const token = jwt.sign({user}, 'kjabdljvCHA73R6273RFsdf');
          res.json(token)
        } else {
          res.json({message : "Usuario o Contraseña Incorrectos"})
        }
      });
    } else {
      res.json({message : "Usuario o Contraseña Incorrectos"});
    }
  },
};

module.exports = publicController;
