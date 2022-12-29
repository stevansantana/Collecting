const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const produtosController = require('../controller/produtosController')
const { authenticate } = require('../middlewares')

router.use(bodyParser.json())

router.route('/')
   .get(produtosController.getProdutos)

router.route('/:user_id')
   .post(authenticate, produtosController.createProduto)

router.route('/:product_id')
   .get(produtosController.getProdutoById)

router.route('/:user_id/:product_id')
   .delete(authenticate, produtosController.deleteProduto)

   .patch(authenticate, produtosController.atualizarProduto)

module.exports = router