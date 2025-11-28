const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    productName : {
        type : String,
        required : true
    },
    productDescription : {
        type : String,
        required : true
    },
    productPrice : {
        type : Number,
        requierd : true
    },
    productCategory : {
        type : String,
        required : true
    },
    productImg : {
        type : String,
        required : true
    }
})

const productModel = mongoose.model('product', productSchema)

module.exports = productModel