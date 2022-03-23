const { Router } = require('express');
const { getProducts, addProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/productosController');
const router = Router();

router.get('/', getProducts)
router.get('/:id', getProductById)
router.post('/create', addProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router