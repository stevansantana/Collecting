const Produtos = require('../models/produto')

const produtosController = {
   async getProdutos(req, res) {
      try {
         const produtosBanco = await Produtos.find({}).maxTimeMS(5000)
         res.setHeader('Content-Type', 'application/json')
         res.status(200).json(produtosBanco)
      } catch (error) {
         console.log(error)
      }
   },

   async createProduto(req, res, next) {

      const { user_id } = req.params
      console.log(user_id)

      Produtos.create({ ...req.body, userId: user_id })
         .then(produto => {
            console.log('Produto criado ', produto)
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(produto)
         })
         .catch(err => console.log(err))
   },

   async getProdutoById(req, res, next) {

      const { product_id } = req.params

      try {
         const resp = await Produtos.findById(product_id)
         if (resp == null) {
            let err = new Error(`Produto ${product_id} não encontrado`)
            err.status = 404
            return next(err)
         }
         res.setHeader('Content-Type', 'application/json')
         res.status(200).json(resp)
      } catch (error) {
         next(error)
      }
   },

   deleteProduto(req, res) {
      const { product_id } = req.params
      Produtos.findByIdAndRemove(product_id)
         .then((resp) => {
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(resp)
         })
         .catch((error) => console.log(error))
   },

   atualizarProduto(req, res) {
      Produtos.findByIdAndUpdate(req.params.id, {
         $set: req.body
      }, { new: true })
         .then(produto => {
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(produto)
         })
         .catch(error => console.log(error))
   }


}


module.exports = produtosController