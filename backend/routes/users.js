var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var Users = require('../models/users')
var jwt = require('jsonwebtoken')

router.use(bodyParser.json())

router
   .get('/', async (req, res) => {
      const usuariosBanco = await Users.find({}).maxTimeMS(5000)
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(usuariosBanco)
   })

   .post('/signup', async (req, res, next) => {
      const { name, email, password, confirmPassword } = req.body
      const userExists = await Users.findOne({ email: email })

      if (!name || !email || !password || !confirmPassword) {
         return res.status(422).json({ msg: "[ERRO] Dados faltando!" })
      }

      if (password !== confirmPassword) {
         return res.status(422).json({ msg: "[ERRO] A duas senhas devem ser idênticas!" })
      }

      if (userExists) {
         return res.status(422).json({ msg: "[ERRO] Usuário já cadastrado!" })
      }
      const user = new Users({
         name,
         email,
         password
      })

      try {
         await user.save()
         res.status(201).json({ msg: "[SUCESSO] Usuário criado com sucesso!" })
      } catch (error) {
         console.log(error)
         res.status(500).json({ msg: "Erro no servidor" })
      }

   })

   .post('/login', async (req, res) => {
      const { email, password } = req.body
      const user = await Users.findOne({ email: email })
      const checkPassword = password === user.password ? true : false


      if (!email || !password) {
         return res.status(422).json({ msg: "[ERRO] Dados faltando!" })
      }

      if (!user) {
         return res.status(404).json({ msg: "[ERRO] Usuário não existe!" })
      }

      if (!checkPassword) {
         return res.status(422).json({ msg: "[ERRO] Senha inválida!" })
      }

      try {
         const secret = 'e7tCTwezDGBeStDw7jAVwzEtPWjVSD53YK2YYTehb9MrSvAn'

         const token = jwt.sign({
            id: user._id
         }, secret)
         res.status(200).json({ msg: "[SUCESSO] Autenticação com sucesso", token })
      } catch (error) {
         console.log(error)
         res.status(500).json({ msg: "Erro no servidor" })
      }



   })





module.exports = router
