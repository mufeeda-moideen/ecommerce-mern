const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  deliveryDate: Date,
  replacementDate: Date, 
});

module.exports = mongoose.model('Product', productSchema);
