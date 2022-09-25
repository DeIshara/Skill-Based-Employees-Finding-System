const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categoriesSchema = new Schema({
  categoryname: {
    type: String
  },
  categorydescription: {
    type: String
  },
  photo: {
    type: String,
    default: ''
  },
  
}, {
    collection: 'Categories'
  });
 

module.exports = mongoose.model('categories', categoriesSchema);