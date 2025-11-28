const express = require('express')
const productRouter = express.Router()

const { addProduct, getProduct, deleteProduct, updateProduct } = require('../controllers/productController')

productRouter.post('/addProduct', addProduct)
productRouter.get('/getProduct', getProduct)
productRouter.delete('/deleteProduct/:id', deleteProduct)
productRouter.put('/updateProduct/:id', updateProduct)

module.exports = productRouter