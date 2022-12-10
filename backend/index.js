const express = require('express')
const session = require('express-session')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const logger = require('morgan')
var path = require('path')
const app = express()
const produtosRouter = require('./routes/produtos')
const port = 5000
const dbUri = 'mongodb://127.0.0.1:27017/collecting'

app.use(cors())

const connect = mongoose.connect(dbUri)
connect.then((db) => {
    console.log("Conectado")
}, (err) => console.log(err))

app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}))
app.use(logger('dev'))
app.use(cookieParser('54321-67890-09876-54321'))

function auth(req, res, next) {
    console.log(req.headers)
    if (!req.signedCookies.user) {

        var authHeader = req.headers.authorization
        if (!authHeader) {
            var err = new Error('You are not authenticated')
            res.setHeader('WWW-Authenticate', 'Basic')
            err.status = 401
            next(err)
            return
        }

        var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':')
        var user = auth[0]
        var pass = auth[1]
        if (user == 'admin' && pass == 'password') {
            res.cookie('user', 'admin', { signed: true })
            next() //authorized
        } else {
            var err = new Error('You are not authenticated')
            res.setHeader('WWW-Authenticate', 'Basic')
            err.status = 401
            next(err)
        }
    } else {
        if (req.signedCookies.user === 'admin') {
            next()
        } else {
            var err = new Error('You are not authenticated')
            res.setHeader('WWW-Authenticate', 'Basic')
            err.status = 401
        }
    }
}

app.use(auth)

app.use('/produtos', produtosRouter)

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})


