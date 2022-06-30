require("dotenv").config();
const db = require("../models");
const sequelize = require("sequelize");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const publicController = {
  test: (req, res) => {
    res.json("Public Test");
  },

  updateUser: async (req, res) => {
    const { firstname, lastname, email, phone, address } = req.body;
    const editUser = await db.User.update(
      { firstname, lastname, email, phone, address },
      {
        where: { id: req.params.userId },
      }
    );
    res.json(editUser);
  },

  decodeJson: (req, res) => {
    token = req.body.token;
    const decoded = jwt.decode(token, { complete: true });
    res.json(decoded.payload);
  },

  showAllProduct: async (req, res) => {
    const products = await db.Product.findAll();
    res.json(products);
  },

  AllUsers: async (req, res) => {
    if (req.body.password === process.env.USERS_PASSWORD) {
      const users = await db.User.findAll();
      res.json(users);
    }
  },

  AllPaymentMethods: async (req, res) => {
    const payment = await db.Payment.findAll();
    res.json(payment);
  },

  productBySlug: async (req, res) => {
    const product = await db.Product.findOne({
      where: { slug: req.params.productSlug },
    });
    res.json(product);
  },

  productTags: async (req, res) => {
    const productTags = await db.Tag.findAll();
    res.json(productTags);
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
          const token = jwt.sign({ user }, process.env.JWT_SECURE_STRING);
          res.json(token);
        } else {
          res.json("ERROR");
        }
      });
    } else {
      res.json("ERROR");
    }
  },

  register: async (req, res) => {
    const {
      firstname,
      lastname,
      img,
      email,
      password,
      phone,
      address,
      isAdmin,
    } = req.body;
    try {
      const user = await db.User.create({
        firstname,
        lastname,
        img,
        email,
        password,
        phone,
        address,
        isAdmin,
      });
      const token = jwt.sign({ user }, process.env.JWT_SECURE_STRING);
      res.json(token);
    } catch (error) {
      res.json("ERROR");
    }
  },

  newPassword: async (req, res) => {
    const user = await db.User.findOne({ where: { email: req.body.email } });
    if (user) {
      bcrypt.compare(
        req.body.oldPassword,
        user.password,
        function (err, check) {
          if (check) {
            user.password = req.body.newPassword;
            user.save();
            res.json(jwt.sign({ user }, process.env.JWT_SECURE_STRING));
          } else {
            res.json("ERROR");
          }
        }
      );
    } else {
      res.json("ERROR");
    }
  },
  showAllOrders: async (req, res) => {
    const orders = await db.Order.findAll();
    res.json(orders);
  },
  showOrder: async (req, res) => {
    const order = await db.Order.findOne({
      where: { id: req.params.id },
    });
    res.json(order);
  },

  orderCreate: async (req, res) => {
    const {
      cantidad,
      products,
      total,
      firstname,
      lastname,
      address,
      state,
      userId,
      paymentId,
    } = req.body;
    try {
      const newOrder = await db.Order.create({
        cantidad,
        products,
        total,
        firstname,
        lastname,
        address,
        state,
        userId,
        paymentId,
      });
      res.json(newOrder);
    } catch (error) {
      res.json({ message: "Error al crear la orden" });
    }
  },

  orderUpdate: async (req, res) => {
    const { cantidad, products, total, firstname, lastname, address, state } =
      req.body;
    try {
      const editOrder = await db.Order.update(
        {
          cantidad,
          products,
          total,
          firstname,
          lastname,
          address,
          state,
        },
        {
          where: { id: req.params.id },
        }
      );
      if (editOrder) {
        res.json({ message: "Order editada con exito" });
      } else {
        res.json({ message: "Error, no existe este order" });
      }
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = publicController;
