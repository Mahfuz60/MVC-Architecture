const express = require("express");
const { getProduct, saveProduct } = require("../controller/products.controller");
const router = express.Router();
//GET request
router.get("/products", getProduct);
//POST request
router.post("/products", saveProduct);

module.exports = router;
