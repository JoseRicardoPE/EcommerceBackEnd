const db = require("../models");
const publicController = {
  createProduct: async (req, res) => {
    const { name, description, path, price, stock, isOutsiding, tagId } =
      req.body;
    if (name && description && path && price && stock && isOutsiding && tagId) {
      try {
        const newProduct = await db.Product.create({
          name,
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
    } else {
      res.json({ message: "Todos los campos son obligatorios" });
    }
  },

  updateProduct: async (req, res) => {
    const product = await db.Product.findByPk(req.params.id);
    if (product) {
      const { name, description, path, price, stock, isOutsiding, tagId } =
        req.body;
      if (
        name &&
        description &&
        path &&
        price &&
        stock &&
        isOutsiding &&
        tagId
      ) {
        product.name = name;
        product.description = description;
        product.path = path;
        product.price = price;
        product.stock = stock;
        product.isOutsiding = isOutsiding;
        product.tagId = tagId;
        try {
          await product.save();
        } catch (error) {
          res.json({ message: "Error al editar el producto" });
        }
        res.json({ message: "Producto editado exitosamente" });
      } else {
        res.json({ message: "Todos los campos son obligatorios" });
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
    //AGREGAR VALIDACION
    const {path, productId} = req.body;
    const newProduct = await db.ProductImages.create({path, productId});
    res.json(newProduct);
  },

  updateImage: async (req, res) => {
    //VALIDACIONES
    const id = req.params.id;
    await db.ProductImages.update(req.body, { where: { id } });
    res.json({message : "Imagen editada con exito"});
  },

  deleteImage: async (req, res) => {
    //VALIDACIONES
    const id = req.params.id;
    await db.ProductImages.destroy({ where: { id } });
    res.json({message : "Imagen eliminada con exito"});
  },

  createPayment: async (req, res) => {
    //validaciones
    await db.Payment.create({
      name: req.body.name,
    });
    res.json("Se ha creado su método de pago exitosamente!");
  },

  deletePayment: async (req, res) => {
    //validaciones
    const payment = await db.Payment.findByPk(req.params.id)
    await payment.destroy()
    res.json({message : "Payment eliminado con exito"})
  },

  updatePayment: async (req, res) => {
    //validaciones
    const updatedMethod = { name: req.body.name };

    try {
      await db.Payment.update(updatedMethod, { where: { id: req.params.id } });
      res.json("se ha cambiado su método de pago");
    } catch (error) {
      res.json("error al actualizar, intente de nuevo", error);
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
      res.json({message:"Se requiere un nombre"});
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
        res.json({message:"Tag editada con exito"});
      } else {
        res.json({message:"Error, no existe este tag"});
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
        res.json({message:"Tag eliminado cone exito"});
      } else {
        res.json({message:"Error, no existe este tag"});
      }
    } catch (error) {
      res.json(error);
    }
  },

};

module.exports = publicController;
