const express = require("express");
const router = express.Router();
const checkJwt = require("../middleware/checkToken")
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
  deletePayment,
  updateUser,
  deleteUser,
  showAllOrders,
  showOrder,
  orderCreate,
  orderUpdate,
  orderDelete,
} = require("../controllers/adminController");

router.use("/", checkJwt)

router.post("/c/product",createProduct);
router.post("/u/product/:id",updateProduct);
router.get("/d/product/:id",deleteProduct);

router.post("/u/user",updateUser);
router.get("/d/user/:id",deleteUser);

router.post("/c/image",createImage);
router.post("/u/image/:id",updateImage);
router.get("/d/image/:id",deleteImage);

router.post("/c/tag", createTag);
router.post("/u/tag/:id",updateTag);
router.get("/d/tag/:id",deleteTag);

router.post("/c/payment",createPayment);
router.post("/u/payment/:id",updatePayment);
router.get("/d/payment/:id",deletePayment);

router.get("/order/show",showAllOrders);
router.post("/c/order",orderCreate);
router.get("/order/show/:id",showOrder);
router.post("/u/order/:id",orderUpdate);
router.post("/d/order/:id",orderDelete);

module.exports = router;
