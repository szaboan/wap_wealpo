import express from 'express';

import * as productController from '../controllers/productController.js'

const router = express.Router();

router.get('/products', productController.getProduct);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
router.get('/products/search', productController.searchProduct);

export default router;