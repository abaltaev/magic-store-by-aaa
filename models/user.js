const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: {type: String, unique: true},
  city: String,
  basket: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Card'}], // корзина
  forsale: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Card'}], // мои продажи по статусу
  purchased: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Card'}] //мои покупки
});

module.exports = mongoose.model('User', userSchema)
