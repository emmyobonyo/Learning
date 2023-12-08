const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const developmerSchema = new Schema({
  id: Number,
  username: String,
  name: String,
});

const Developer = mongoose.model('Developer', developmerSchema);

module.exports = Developer;
