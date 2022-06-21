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
router.post("/u/product", updateProduct);
router.get("/d/product", deleteProduct);

router.post("/c/image", createImage);
router.post("/u/image", updateImage);
router.get("/d/image", deleteImage);

router.post("/c/tag", createTag);
router.post("/u/tag", updateTag);
router.get("/d/tag", deleteTag);

router.post("/c/payment", createPayment);
router.post("/u/payment", updatePayment);
router.get("/d/payment", deletePayment);

module.exports = router;
