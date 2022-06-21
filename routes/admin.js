const express = require("express");
const router = express.Router();
const {test} = require("../controllers/adminController")

router.get("/", test);

module.exports = router;
