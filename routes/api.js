const express = require("express");
const router = express.Router();
const formidable = require("formidable");
const checkJwt = require("../middleware/checkToken");

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
  getTag,
  getOrdersFromUser,
} = require("../controllers/publicController");
var jwt = require("jsonwebtoken");

router.get("/orders/from/:userId", checkJwt, getOrdersFromUser);

router.get("/tag/:id", getTag);

router.post("/decode", checkJwt, decodeJson);

router.post("/update/user/:userId", checkJwt, updateUser);

router.get("/seed/all", seedAll);

router.get("/product/all", showAllProduct);

router.get("/product/outsiding", productByOutsiding);

router.post("/users", AllUsers);
router.get("/payment-methods", AllPaymentMethods);

router.post("/login", checkJwt, login);
router.post("/register", register);
router.post("/newpassword", checkJwt, newPassword);

router.get("/product/:productSlug", productBySlug);

router.get("/tag", productTags);
router.get("/product/tag/:tagId", productByTagId);

module.exports = router;
