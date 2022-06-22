const db = require("../models");
const publicController = {
  createProduct: async (req, res) => {
    const { name, slug, description, path, price, stock, isOutsiding, tagId } =
      req.body;
    try {
      const newProduct = await db.Product.create({
        name,
        slug,
        description,
        path,
        price,
        stock,
        isOutsiding,
        tagId,
      });
      res.json(newProduct);
    } catch (error) {
      res.json({ message: "Error al crear el Producto" });
    }
  },

  updateProduct: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    if (product) {
      const { name, slug, description, path, price, stock, isOutsiding, tagId } =
        req.body;
      product.name = name;
      product.slug = slug;
      product.description = description;
      product.path = path;
      product.price = price;
      product.stock = stock;
      product.isOutsiding = isOutsiding;
      product.tagId = tagId;
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
    const { name } = req.body;
    if (name) {
      try {
        const newTag = await db.Tag.create({
          name,
        });
        res.json({ message: "Tag creada con exito" });
      } catch (error) {
        res.json(error);
      }
    } else {
      res.json({ message: "Se requiere un nombre" });
    }
  },

  updateTag: async (req, res) => {
    try {
      const editTag = await db.Tag.update(
        {
          name: req.body.name,
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
};

module.exports = publicController;
