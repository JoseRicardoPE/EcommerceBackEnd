const express = require("express");
const router = express.Router();
const {
  createProduct,
  updateProduct,
  deleteProduct,
  createImage,
  updateImage,
  deleteImage,
  createTag,
  updateTag,
  deleteTag,
  createPayment,
  updatePayment,
  deletePayment
} = require("../controllers/adminController");

router.post("/c/product", createProduct);
router.post("/u/product/:id", updateProduct);
router.get("/d/product/:id", deleteProduct);

router.post("/c/image", createImage);
router.post("/u/image/:id", updateImage);
router.get("/d/image/:id", deleteImage);

router.post("/c/tag", createTag);
router.post("/u/tag/:id", updateTag);
router.get("/d/tag/:id", deleteTag);

router.post("/c/payment", createPayment);
router.post("/u/payment/:id", updatePayment);
router.get("/d/payment/:id", deletePayment);

module.exports = router;
