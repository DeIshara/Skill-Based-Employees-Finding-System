const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSessionSchema = new Schema({
  userId: {
    type: String,
    default: 'finder'
  },
  timestamp: {
    type: Date,
    default:Date.now()
  }, 
  isDeleted: {
    type: Boolean,
    default:false
  }
})

module.exports = mongoose.model('userSession', userSessionSchema);