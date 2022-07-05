const express = require("express");
const router = express.Router();

const {
  seedAll,
  showAllProduct,
  productBySlug,
  productByTagId,
  productByOutsiding,
  login,
  register,
  newPassword,
  productTags,
  AllUsers,
  AllPaymentMethods,
  decodeJson,
  updateUser,
  getTag
} = require("../controllers/publicController");
var jwt = require("jsonwebtoken");

router.get("/tag/:id", getTag)

router.post("/decode", decodeJson);

router.post("/update/user/:userId", updateUser);

router.get("/seed/all", seedAll);

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

module.exports = router;
