const express = require("express");
const { calculateTax } = require("../controllers/taxController");
const router = express.Router();

router.post("/", calculateTax);

module.exports = router;
