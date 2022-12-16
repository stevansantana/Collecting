const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const User = require('../models/users')
const Carrinho = require('../models/carrinho')

router.use(bodyParser.json())

router.route('/')
   .get(async (req, res) => {
      try {
         const carrinhoBanco = await Carrinho.find({})
         res.setHeader('Content-Type', 'application/json')
         res.status(200).json(carrinhoBanco)
      } catch (error) {
         console.log(error)
      }
   })

router.route('/adicionarAoCarrinho')
   .post(async (req, res) => {
    Carrinho.create(req.body)
    .then(carrinho => {
      console.log()
    })
   })


module.exports = router