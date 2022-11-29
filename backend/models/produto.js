const mongoose = require('mongoose')


const produtoSchema = new mongoose.Schema({
    name: String,
    price: Number,
    linkImg: String
})

module.exports = produtoSchema