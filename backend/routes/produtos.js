const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const Produtos = require('../models/produto')

router.use(bodyParser.json())

let produtos = [
    {
        "linkImg": "https://via.placeholder.com/200",
        "name": "Prod",
        "price": "250",
        "id": 1
    },
    {
        "linkImg": "https://via.placeholder.com/200",
        "name": "Prod2",
        "price": "280",
        "id": 2
    }
]

router
    .get('/', async (req, res) => {
        try {
            const produtosBanco = await Produtos.find({}).maxTimeMS(5000)
            res.setHeader('Content-Type', 'application/json')
            res.status(200).json(produtosBanco)
        } catch (error) {
            console.log(error)
        }

    })

    .post('/', (req, res) => {
        Produtos.create(req.body)
            .then(produto => {
                console.log('Produto criado ', produto)
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(produto)
            })
            .catch(err => console.log(err))
    })

router
    .get('/:id', (req, res) => {
        Produtos.findById(req.params.id)
            .then(resp => {
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(resp)
            })
            .catch(error => console.log(error))
    })

    .delete('/:id', (req, res) => {
        Produtos.findByIdAndRemove(req.params.id)
            .then((resp) => {
                res.setHeader('Content-Type', 'application/json')
                res.status(200).json(resp)
            })
            .catch((error) => console.log(error))
    })

    .put('/:id', (req, res) => {
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