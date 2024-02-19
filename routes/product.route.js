const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();
const {getProducts, getProductById, updateProduct, addProduct, deleteProduct} = require('../controllers/product.controller');

router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', updateProduct);
router.post('/', addProduct);
router.delete('/:id', deleteProduct);


module.exports = router;