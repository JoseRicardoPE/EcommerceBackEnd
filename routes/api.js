const express = require("express");
const router = express.Router();
const {
  showAllProduct,
  productById,
  productByTagId,
  imagesByProductId,
  productByOutsiding,
  login
} = require("../controllers/publicController");

router.get("/product/all", showAllProduct);

router.get("/product/outsiding", productByOutsiding);

router.post("/login", login)

router.get("/product/:productId", productById);

router.get("/product/tag/:tagId", productByTagId);

router.get("/images/:productId", imagesByProductId);


module.exports = router;
