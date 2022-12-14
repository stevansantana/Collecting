var mongoose = require('mongoose')

const passportLocalMongoose = require('passport-local-mongoose')

var User = new mongoose.Schema({
   name: String,
   email: String,
   password: String
})

User.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', User)