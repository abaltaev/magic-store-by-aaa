const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  password: String,
  email: String,
  city: String,

  basket: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Card'}],
  forsale: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Card'}],
  purchased: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Card'}]
});

module.exports = mongoose.model('User', userSchema)
