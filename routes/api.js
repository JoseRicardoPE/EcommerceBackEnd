const express = require("express");
const router = express.Router();
const {test} = require("../controllers/publicController")

router.get("/", test);

module.exports = router;
