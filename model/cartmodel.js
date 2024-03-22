const mongoose = require('mongoose')
const cartschema = new mongoose.Schema({
    pid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    addedat:{
        type:Date,
        default:Date.now()
    }
})
module.exports = mongoose.model('cart',cartschema)