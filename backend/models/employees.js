const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let employeesSchema = new Schema({
  employeeId: {
    type: String
  },
  seleCategoryName: {
    type: String
  },
  employeedistrict: {
    type: String
  },
  employeeName: {
    type: String
  },
  employeeContact: {
    type: Number
  },
  employeeEmail:{
    type:String
  },
  employeeDescription: {
    type: String
  },
  employeeAvailable: {
    type: String
  },
}, {
    collection: 'employees'
  })

module.exports = mongoose.model('employees', employeesSchema);