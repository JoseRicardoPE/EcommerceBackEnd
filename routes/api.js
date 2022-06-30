const express = require("express");
const router = express.Router();
const initial_setup = require("../initial_setup");
const {
  showAllProduct,
  productBySlug,
  productByTagId,
  imagesByProductId,
  productByOutsiding,
  login,
  register,
  newPassword,
  productTags,
  AllUsers,
  AllPaymentMethods,
  decodeJson,
  updateUser,
  showOrder,
  orderCreate,
  orderUpdate,
} = require("../controllers/publicController");
var jwt = require("jsonwebtoken");

router.post("/decode", decodeJson);

router.post("/update/user/:userId", updateUser);

router.get("/seed/all", (req, res) => {
  initial_setup();
  res.json("Seeder Exitoso");
});

router.get("/product/all", showAllProduct);

router.get("/product/outsiding", productByOutsiding);

router.post("/users", AllUsers);
router.get("/payment-methods", AllPaymentMethods);

router.post("/login", login);
router.post("/register", register);
router.post("/newpassword", newPassword);

router.get("/product/:productSlug", productBySlug);

router.get("/tag", productTags);
router.get("/product/tag/:tagId", productByTagId);

router.get("/images/:productId", imagesByProductId);

router.get("/order/show/:id", showOrder);
router.post("/order/c", orderCreate);
router.post("/order/u/:id", orderUpdate);

module.exports = router;
