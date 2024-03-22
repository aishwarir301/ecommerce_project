const mongoose = require('mongoose')
const catagary = new mongoose.Schema({
    image:{
        type:String
    },
    cname:{
        type:String
    }
})
module.exports = mongoose.model('category',catagary)