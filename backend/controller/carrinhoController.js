const Carrinho = require('../models/carrinho')

const carrinhoController = {

   async criarCarrinho(req, res) {
      const bodyData = req.body
      const { user_id } = req.params

      try {

         const createdCart = await Carrinho.create({ ...bodyData, username: user_id })
         await createdCart.populate('products').execPopulate()

         return res.status(200).json(createdCart)

      } catch (err) {

         return res.status(400).json(err)

      }
   },

   async getUserCarrinhos(req, res) {

      const { user_id } = req.params

      try {

         const userCarts = await Carrinho.find({ username: user_id }).populate('products')
         return res.status(200).json(userCarts)

      } catch (err) {

         return res.status(400).json(err)

      }

   },

   async getCarrinho(req, res) {

      const {  cart_id } = req.params

      try {

         const cart = await Carrinho.findById(cart_id).populate('products')
         return res.status(200).json(cart)

      } catch (err) {

         return res.status(400).json(err)

      }

   }

}

module.exports = carrinhoController