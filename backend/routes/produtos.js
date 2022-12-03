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
            const produtosb = await Produtos.find();
            res.status(200).json(produtosb)
        } catch (error) {
            res.status(500).json({ error: error })
        }

    })

    .post('/', (req, res) => {
        let maxId = Math.max(...produtos.map(({ id }) => id))
        produtos.push({
            linkImg: req.body.linkImg,
            name: req.body.name,
            price: req.body.price,
            id: ++maxId
        })
    })

router
    .get('/:id', (req, res) => {
        let produtoPorId = produtos.filter(produto => produto.id == req.params.id)[0]
        res.json(produtoPorId)
    })

    .delete('/:id', (req, res) => {
        produtos = produtos.filter(produto => produto.id != req.params.id)
        res.json(produtos)
    })

    .put('/:id', (req, res) => {
        let produtoPorId = produtos.filter(produto => produto.id == req.params.id)[0]
        produtoPorId.name = req.body.name
        produtoPorId.price = req.body.price
        res.json(produtoPorId)
    })



module.exports = router