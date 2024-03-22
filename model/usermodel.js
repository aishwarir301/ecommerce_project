const mongoose = require('mongoose')
const userlogin = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})
module.exports = mongoose.model('userlogin',userlogin)