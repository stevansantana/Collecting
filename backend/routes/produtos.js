const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Produtos = require('../models/produto')

router.use(bodyParser.json())

router.route('/')
   .get(async (req, res) => {
      try {
         const produtosBanco = await Produtos.find({}).maxTimeMS(5000)
         res.setHeader('Content-Type', 'application/json')
         res.status(200).json(produtosBanco)
      } catch (error) {
         console.log(error)
      }

   })

   .post((req, res) => {
      Produtos.create(req.body)
         .then(produto => {
            console.log('Produto criado ', produto)
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(produto)
         })
         .catch(err => console.log(err))
   })

router.route('/:id')
   .get(async (req, res, next) => {
      try {
         const resp = await Produtos.findById(req.params.id)
         if (resp == null) {
            let err = new Error(`Produto ${req.params.id} não encontrado`)
            err.status(404)
            return next(err)
         }
         res.setHeader('Content-Type', 'application/json')
         res.status(200).json(resp)
      } catch (error) {
         next(error)
      }
   })

   .delete((req, res) => {
      Produtos.findByIdAndRemove(req.params.id)
         .then((resp) => {
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(resp)
         })
         .catch((error) => console.log(error))
   })

   .put((req, res) => {
      Produtos.findByIdAndUpdate(req.params.id, {
         $set: req.body
      }, { new: true })
         .then(produto => {
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(produto)
         })
         .catch(error => console.log(error))

   })



module.exports = router