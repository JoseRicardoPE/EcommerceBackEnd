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

router.get("/c/product", createProduct);
router.get("/u/product", updateProduct);
router.get("/d/product", deleteProduct);

router.get("/c/image", createImage);
router.get("/u/image", updateImage);
router.get("/d/image", deleteImage);

router.get("/c/tag", createTag);
router.get("/u/tag", updateTag);
router.get("/d/tag", deleteTag);

router.get("/c/payment", createPayment);
router.get("/u/payment", updatePayment);
router.get("/d/payment", deletePayment);

module.exports = router;
