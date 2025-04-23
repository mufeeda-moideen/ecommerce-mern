const express = require('express');
const router = express.Router();

//import controller
const productController = require("../controllers/productController");
router.post('/add', productController.product);
router.get('/get/pro', productController.fetchProduct);
router.get('/get/:id', productController.productView);

module.exports = router;