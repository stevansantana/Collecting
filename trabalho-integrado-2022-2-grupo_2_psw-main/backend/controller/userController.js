const Users = require('../models/users')

const UserController = {

   async getUsuarios(req, res) {
      const usuariosBanco = await Users.find({}).maxTimeMS(5000)
      res.setHeader('Content-Type', 'application/json')
      res.status(200).json(usuariosBanco)
   },

   async criarUsuario(req, res) {
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

   },

   async getUserById(req, res) {

      const { user_id } = req.params
      
      try {

         const user = await Users.findById(user_id)
         return res.status(200).json(user)

      } catch (err) {

         return res.status(400).send(err)

      }

   }


}

module.exports = UserController