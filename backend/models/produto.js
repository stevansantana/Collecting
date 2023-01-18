const mongoose = require('mongoose')

const produtoSchema = new mongoose.Schema({
   name: String || "Sem Nome",
   price: Number || 0,
   linkImg: String,
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   }
})


var Produtos = mongoose.model('Produtos', produtoSchema)

module.exports = Produtos