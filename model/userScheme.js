const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("CLIENT", clientSchema);
module.exports = User;
