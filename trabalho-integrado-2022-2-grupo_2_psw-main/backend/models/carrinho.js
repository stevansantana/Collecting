var mongoose = require('mongoose')

var carrinhoSchema = new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   produtos: [
      {
         idProduto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Produto'
         },
         name: String,
         price: Number,
         linkImg: String
      }
   ],
   precoTotal: {
      type: Number,
      default: 0.0
   }
})

var Carrinho = mongoose.model('Carrinho', carrinhoSchema)

module.exports = Carrinho