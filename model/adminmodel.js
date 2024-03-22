const mongoose = require('mongoose')
const adminlogin = new mongoose.Schema({
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
module.exports = mongoose.model('adminlogin',adminlogin)