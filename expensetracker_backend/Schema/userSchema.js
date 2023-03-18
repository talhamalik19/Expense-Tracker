const  { Schema } = require('mongoose')
const mongoose = require('mongoose')

const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
    
})

const user = new mongoose.model('web2', userSchema);
module.exports=user;
