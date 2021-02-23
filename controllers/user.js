const bcrypt = require('bcryptjs');
const User = require('../models/user');

class UserController {

  constructor() {
  }

  async indexAll() {
    return User.find().limit(10);
  }

  async store(user) {

    user.password = await bcrypt.hash( user.password, 6 );;

    return User.create(user);
    
  };

  async update(id, user) {    
    return User.findByIdAndUpdate(id,user);
  }

  async destroy(id) {
    return User.findByIdAndRemove(id);
  }

}


let UserController = new UserController();
module.exports = UserController;