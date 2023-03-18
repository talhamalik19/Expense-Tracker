const mongoose = require('mongoose')

const url ='mongodb://localhost:27017/webproject';

const connectToMongo = ()=>{
    mongoose.connect(url, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;