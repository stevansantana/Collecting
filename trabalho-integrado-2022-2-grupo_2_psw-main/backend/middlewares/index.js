const jwt = require('jsonwebtoken')

const middlewares = {

   async authenticate(req, res, next) {

      const authHeader = req.headers["authorization"]
      const token = authHeader.split(' ')[1]
      if (!token) {
         return res.status(400).json({
            erro: true,
            msg: 'Necessário fazer o login'
         })
      }

      const secret = 'e7tCTwezDGBeStDw7jAVwzEtPWjVSD53YK2YYTehb9MrSvAn'

      jwt.verify(token, secret, (err, decoded) => {
         if (err) return res.status(401).json({
            erro: true,
            msg: 'Ops, você deve estar logado para fazer isso!'
         })
         req.userId = decoded.id
      })


      next()

   }

}

module.exports = middlewares 