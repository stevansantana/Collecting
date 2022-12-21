const Carrinho = require('../models/carrinho')

const carrinhoController = {

   async atualizarCarrinho(req, res) {
      const { user_id } = req.params

      const _idProduto = req.body.produtos.idProduto
      console.log(_idProduto)

      const carrinhoAtualizado = await Carrinho.findOneAndUpdate(
         { userId: user_id },
         {
            $push: {
               produtos:
               {
                  _id: _idProduto,
                  name: req.body.produtos.name,
                  price: req.body.produtos.price,
                  linkImg: req.body.produtos.linkImg
               }
            }
         })
      return res.status(200).json(carrinhoAtualizado)
   },

   async removerDoCarrinho(req, res) {
      const { user_id } = req.params

      const _idProduto = req.body._id
      console.log(_idProduto)

      const carrinhoAtualizado = await Carrinho.findOneAndUpdate(
         { userId: user_id },
         {
            $pull: { produtos: { idProduto: _idProduto } }
         })
      return res.status(200).json(carrinhoAtualizado)
   },

   async criarCarrinho(req, res, next) {
      const bodyData = req.body
      const { user_id } = req.params

      try {

         const createdCart = await Carrinho.create({ ...bodyData, userId: user_id })
         //await createdCart.populate('products').execPopulate()

         return res.status(200).json(createdCart)

      } catch (err) {

         return res.status(400).json(err)

      }
   },

   async getUserCarrinhos(req, res) {

      const { user_id } = req.params

      try {

         const userCarts = await Carrinho.find({ userId: user_id })
         return res.status(200).json(userCarts)

      } catch (err) {

         return res.status(400).json(err)

      }

   },

   async getCarrinho(req, res) {

      const { cart_id } = req.params

      try {

         const cart = await Carrinho.findById(cart_id).populate('products')
         return res.status(200).json(cart)

      } catch (err) {

         return res.status(400).json(err)

      }

   }

}

module.exports = carrinhoController