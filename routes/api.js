const express = require("express");
const router = express.Router();
const {
  showAllProduct,
  productBySlug,
  productByTagId,
  imagesByProductId,
  productByOutsiding,
  login,
  register,
  newPassword,
} = require("../controllers/publicController");

router.get("/product/all", showAllProduct);

router.get("/product/outsiding", productByOutsiding);

router.post("/login", login);
router.post("/register", register);
router.post("/newpassword", newPassword);

router.get("/product/:productSlug", productBySlug);

router.get("/product/tag/:tagId", productByTagId);

router.get("/images/:productId", imagesByProductId);

module.exports = router;
