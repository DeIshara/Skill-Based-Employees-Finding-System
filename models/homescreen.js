const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let homescreenSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  empid: {
    type: Number
  }
}, {
    collection: 'homescreen'
  })

module.exports = mongoose.model('homescreen', homescreenSchema);