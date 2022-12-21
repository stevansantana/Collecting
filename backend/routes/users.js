var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var Users = require('../models/users')
var jwt = require('jsonwebtoken')
const userController = require('../controller/userController')

router.use(bodyParser.json())

router
   .get('/', userController.getUsuarios)

   .post('/', userController.criarUsuario)

   .get('/:user_id', userController.getUserById)

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
            id: user._id,
         }, secret)
         res.status(200).json({ msg: "[SUCESSO] Autenticação com sucesso", token })
      } catch (error) {
         console.log(error)
         res.status(500).json({ msg: "Erro no servidor" })
      }



   })





module.exports = router
