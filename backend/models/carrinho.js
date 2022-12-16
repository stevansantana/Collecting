var mongoose = require('mongoose')

var carrinhoSchema = new mongoose.Schema({
   userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   produtos:[
      {
         produto: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Produto'
         },
         name: String,
         price: Number
      }
   ],
   precoTotal: {
      type: Number,
      default: 0.0
   }
})

var Carrinho = mongoose.model('Carrinho', carrinhoSchema)

module.exports = Carrinho