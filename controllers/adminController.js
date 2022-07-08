const db = require("../models");
var jwt = require("jsonwebtoken");
const format = require("date-fns/format");

const publicController = {
  updateStock: async (req, res) => {
    const cartProducts = req.body;
    try {
      for (const cartProduct of cartProducts) {
        const product = await db.Product.findByPk(cartProduct.id);
        if (product) {
          const newStock = product.stock - cartProduct.cuantity;
          product.stock = newStock;
          try {
            await product.save();
          } catch (error) {
            res.json({ message: "Producto no editado" });
            res.json(error);
          }
        } else {
          res.json({ message: "Producto no encotrado" });
        }
      }
      res.json({ message: "stocks editados con exito" });
    } catch (error) {
      res.json({ message: "Producto no editado bg" });

      res.json(error);
    }
  },

  createProduct: async (req, res) => {
    const { path, name, slug, description, tagId, price, stock, isOutsiding } =
      req.body;

    try {
      const newProduct = await db.Product.create({
        path,
        name,
        slug,
        description,
        tagId,
        price,
        stock,
        isOutsiding,
      });
      res.json(newProduct);
    } catch (error) {
      res.json({ message: "Error al crear el Producto" });
    }
  },

  updateProduct: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    if (product) {
      const {
        path,
        name,
        slug,
        description,
        tagId,
        price,
        stock,
        isOutsiding,
      } = req.body;

      product.name = name;
      product.slug = slug;
      product.description = description;
      product.tagId = tagId;
      product.path = path;
      product.price = price;
      product.stock = stock;
      product.isOutsiding = isOutsiding;
      try {
        await product.save();
        res.json({ message: "Producto editado exitosamente" });
      } catch (error) {
        res.json({ message: "Error al editar el producto" });
      }
    } else {
      res.json({ message: "Producto no encotrado" });
    }
  },

  deleteProduct: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    if (product) {
      await product.destroy();
      res.json({ message: "Producto Eliminado exitosamente" });
    } else {
      res.json({ message: "Producto no encontrado" });
    }
  },

  createImage: async (req, res) => {
    const { path, productId } = req.body;
    try {
      const newProduct = await db.ProductImages.create({ path, productId });
      res.json(newProduct);
    } catch (error) {
      res.json({ message: "Error al crear la imagen" });
    }
  },

  updateImage: async (req, res) => {
    const id = req.params.id;
    try {
      await db.ProductImages.update(req.body, { where: { id } });
      res.json({ message: "Imagen editada con exito" });
    } catch (error) {
      res.json({ message: "Error al editar la Imagen" });
    }
  },

  deleteImage: async (req, res) => {
    const id = req.params.id;
    try {
      await db.ProductImages.destroy({ where: { id } });
      res.json({ message: "Imagen eliminada con exito" });
    } catch (error) {
      res.json({ message: "Error al eliminar la Imagen" });
    }
  },

  createPayment: async (req, res) => {
    try {
      await db.Payment.create({
        name: req.body.name,
      });
      res.json("Se ha creado su método de pago exitosamente!");
    } catch (error) {
      res.json({ message: "Error al crear el payment" });
    }
  },

  deletePayment: async (req, res) => {
    try {
      const payment = await db.Payment.findByPk(req.params.id);
      await payment.destroy();
      res.json({ message: "Payment eliminado con exito" });
    } catch (error) {
      res.json({ message: "Error al eliminar el payment" });
    }
  },

  updatePayment: async (req, res) => {
    const updatedMethod = { name: req.body.name };
    try {
      await db.Payment.update(updatedMethod, { where: { id: req.params.id } });
      res.json("se ha cambiado su método de pago");
    } catch (error) {
      res.json("error al actualizar el payment, intente de nuevo");
    }
  },

  createTag: async (req, res) => {
    const { path, name, description } = req.body;
    if (name && path && description) {
      try {
        const newTag = await db.Tag.create({
          name,
          path,
          description,
        });
        res.json({ message: "Tag creada con exito" });
      } catch (error) {
        res.json(error);
      }
    } else {
      res.json({ message: "Se requiere un nombre y un path" });
    }
  },

  updateTag: async (req, res) => {
    const { path, name, description } = req.body;

    try {
      const editTag = await db.Tag.update(
        {
          path,
          name,
          description,
        },
        {
          where: { id: req.params.id },
        }
      );
      if (editTag) {
        res.json({ message: "Tag editada con exito" });
      } else {
        res.json({ message: "Error, no existe este tag" });
      }
    } catch (error) {
      res.json(error);
    }
  },

  deleteTag: async (req, res) => {
    try {
      const delTag = await db.Tag.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (delTag) {
        res.json({ message: "Tag eliminado cone exito" });
      } else {
        res.json({ message: "Error, no existe este tag" });
      }
    } catch (error) {
      res.json(error);
    }
  },

  updateUser: async (req, res) => {
    const user = await db.User.findByPk(req.params.id);
    user.isAdmin = !user.isAdmin;
    user.save();
    res.json(user);
  },

  deleteUser: async (req, res) => {
    try {
      const deleteUser = await db.User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (deleteUser) {
        res.json({ message: "Usuario eliminado cone exito" });
      } else {
        res.json({ message: "Error, no se puede eliminar el usuario" });
      }
    } catch (error) {
      res.json(error);
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
    const creationDate = format(new Date(Date.now()), "dd-MM-yyyy");
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
        creationDate,
      });
      res.json(newOrder);
    } catch (error) {
      res.json({ message: "Error al crear la orden" });
    }
  },

  orderUpdate: async (req, res) => {
    const { newState } = req.body;
    try {
      const editOrder = await db.Order.findByPk(req.params.id);

      editOrder.state = newState;

      editOrder.save();
      res.json("Orden Editada con exito");
    } catch (error) {
      res.json({ message: "error" });
    }
  },

  orderDelete: async (req, res) => {
    try {
      const deleteOrder = await db.Order.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (deleteOrder) {
        res.json({ message: "Orden eliminado cone exito" });
      } else {
        res.json({ message: "Error, no se puede eliminar la orden" });
      }
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = publicController;
