const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
    name: String || "Sem Nome",
    price: Number || 0,
    linkImg: String
})


var Produtos = mongoose.model('Produto', produtoSchema)

module.exports = Produtos