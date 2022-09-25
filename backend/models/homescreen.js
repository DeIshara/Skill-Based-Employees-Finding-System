const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let homescreenSchema = new Schema({
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
    collection: 'homescreen'
  })

module.exports = mongoose.model('homescreen', homescreenSchema);