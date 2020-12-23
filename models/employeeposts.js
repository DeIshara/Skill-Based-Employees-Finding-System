const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeepostSchema = new Schema({
  epostid: {
    type: String
  },
  postname: {
    type: String
  },
  empid: {
    type: Number
  }
}, {
    collection: 'employeepost'
  })

module.exports = mongoose.model('employeepost', employeepostSchema);