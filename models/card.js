const mongoose = require('mongoose');

const cardSchema = mongoose.Schema({
  name: String,
  img: String,
  price: Number,
  rare: String,
  city: String,
  condition: String,
  status: {type: Boolean, default: true},
  buyerID: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
  sellerID: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
  coordinates: {width: Number, longitude: Number}
});


module.exports = mongoose.model('Card', cardSchema);
