const mongoose = require('mongoose');


const userSchema = {
  name    : String,
  email   : {
    type: String,
    required: true,
    index: unique
  },
  password: Number
}

const User = mongoose.model('User', userSchema);

module.exports = User;