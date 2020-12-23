const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let finderpostSchema = new Schema({
  fpostid: {
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

module.exports = mongoose.model('employees', finderpostSchema);