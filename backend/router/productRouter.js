const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const productController = require("../controllers/productController");


// Add Product
router.post("/add", productController.product);

// Get All Products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Get Single Product
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

module.exports = router;
