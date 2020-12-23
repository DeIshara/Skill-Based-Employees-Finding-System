const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeesSchema = new Schema({
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
    collection: 'employees'
  })

module.exports = mongoose.model('employees', employeesSchema);