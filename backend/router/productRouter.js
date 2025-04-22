const express = require('express');
const router = express.Router();
const Product = require('../models/product');

// Add Product
router.post('/add', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

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
