const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

schema.set('timestamps', true);

// Definindo um model no módulo global do mongoose.
const User = mongoose.model('Users', schema);

module.exports = User;
