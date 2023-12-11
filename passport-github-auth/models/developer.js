const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const developmerSchema = new Schema({
  id: String, // Github returns a string as the id
  username: String,
  name: String,
});

const Developer = mongoose.model('Developer', developmerSchema);

module.exports = Developer;
