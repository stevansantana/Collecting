var express = require('express')
var session = require('express-session')
var FileStore = require('session-file-store')(session)
var passport = require('passport')
var fileUpload = require('express-fileupload')
var mongoose = require('mongoose')
var cors = require('cors')
var logger = require('morgan')
var path = require('path')
var config = require('./config')
var app = express()
var produtosRouter = require('./routes/produtos')
var usersRouter = require('./routes/users')
var carrinhoRouter = require('./routes/carrinho')
var port = 5000
var dbUri = config.mongoUrl



app.use(cors())
app.use(express.json({ limit: '10mb', extended: true }))
app.use(express.urlencoded({ limit: "10mb", extended: true, parameterLimit: 50000 }))


const connect = mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
connect.then((db) => {
   console.log("MongoDB conectado")
}, (err) => console.log(err))

app.use(express.json())
app.use(fileUpload({
   useTempFiles: true,
   tempFileDir: path.join(__dirname, 'temp')
}))
app.use(logger('dev'))
//app.use(cookieParser('54321-67890-09876-54321'))


app.use(passport.initialize())

app.use('/users', usersRouter)
app.use(express.static(path.join(__dirname, 'public')))
app.use('/produtos', produtosRouter)
app.use('/carrinho', carrinhoRouter)

app.listen(port, () => {
   console.log(`Rodando na porta ${port}`)
})


