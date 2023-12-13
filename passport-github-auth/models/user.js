const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  uniqueId: String,
  username: String,
  name: String,
});

const User = mongoose.model('user', userSchema);
module.exports = User;
