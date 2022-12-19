const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const middlewares = {

   async authenticate(req, res, next) {

      const authHeader = req.headers.authorization
      const [, token] = authHeader.split(' ')
      if (!token) {
         return res.status(400).json({
            erro: true,
            msg: 'Necessário fazer o login'
         })
      }

      const secret = 'e7tCTwezDGBeStDw7jAVwzEtPWjVSD53YK2YYTehb9MrSvAn'
      try {
         const decode = await promisify(jwt.verify)(token, secret)
         console.log(decode.id)
         req.userId = decode.id
         return next()
      } catch (error) {
         return res.status(400).json({
            erro: true,
            msg: 'Necessário fazer o login'
         })
      }

      next()

   }

}

module.exports = middlewares 