const mongoose = require('mongoose')
const  { Schema } = require('mongoose')


const expenseSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true
    },
    expenseName:{
        type: String,
        required: true
    },
    expenseAmount:{
        type: String,
        required: true
    },
    expenseDate:{
        type: String,
        required: true
    }

})

const expense = new mongoose.model('expenses', expenseSchema)
module.exports= expense;