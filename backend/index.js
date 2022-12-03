const express = require('express')
const session = require('express-session')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
var path = require('path')
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

const produtosRouter = require('./routes/produtos')

app.use('/produtos', produtosRouter)

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`)
})