const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

let usersSchema = new Schema({
  username: {
    type: String,
    default:''
  },
  email: {
    type: String,
    default:''
  },
  password: {
    type: String,
    default:''
  },
  account_type: {
    type: String,
    default:'finder'
  },
  isDeleted: {
    type: Boolean,
    default:false
  },
  name: {
    type: String,
    default:''
  },
  address: {
    type: String,
    default:''
  },
  contact: {
    type: Number,
    default: 0
  },
  photo: {
    type: String,
    default: ''
  },

}, {
    collection: 'users'
  });
  usersSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  usersSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

module.exports = mongoose.model('users', usersSchema);