const express = require("express");
const router = express.Router();
const formidable = require("formidable");

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

router.post("/api/upload", (req, res, next) => {
  const form = formidable.IncomingForm();
  res.json(form)
});

router.get("/orders/from/:userId", getOrdersFromUser);

router.get("/tag/:id", getTag);

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
