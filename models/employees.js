const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeesSchema = new Schema({
  empid: {
    type: String
  },
  password: {
    type: String
  },
  email: {
    type: String
  },
  contactno:{
    type:Number
  }
}, {
    collection: 'employees'
  })

module.exports = mongoose.model('employees', employeesSchema);