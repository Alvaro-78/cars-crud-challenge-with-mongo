const mongoose = require('mongoose');


const userSchema = {
  name    : String,
  email   : String,
  password: Number
}

const Car = mongoose.model('User', userSchema);

module.exports = User;