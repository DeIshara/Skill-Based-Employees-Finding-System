const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let finderpostSchema = new Schema({
  Create_Admin: {
    type: String,
    default: ''
  },
  Creator: {
    type: String,
    default: ''
  },
  Creator_photo: {
    type: String,
    default: ''
  },
  Description: {
    type: String,
    default: ''
  },
  photo: {
    type: String,
    default: ''
  }
}, {
    collection: 'finderposts'
  })

module.exports = mongoose.model('finderposts', finderpostSchema);