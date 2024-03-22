const mongoose = require('mongoose')
const product = new mongoose.Schema({
    pname:{
        type:String
    },
    pdetails:{
        type:String
    },
    price:{
        type:String
    },
    pimage:{
        type:String
    },
    discount:{
        type:String
    },
    size:{
        type:Array
    },
   catagory:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'category'
    }
})
module.exports = mongoose.model('product',product)