const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const { authenticate } = require('../middlewares')
const carrinhoController = require('../controller/carrinhoController')

router.use(bodyParser.json())

router.route('/:user_id')
   .post(authenticate, carrinhoController.criarCarrinho)

   .patch(authenticate, carrinhoController.atualizarCarrinho)

   .get(authenticate, carrinhoController.getUserCarrinhos)

router.route('/:user_id/:product_id')
   .patch(authenticate, carrinhoController.removerDoCarrinho)

router.route('/:user_id/:cart_id')
   .get(authenticate, carrinhoController.getCarrinho)


module.exports = router