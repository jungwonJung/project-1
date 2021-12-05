const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: String,
  pessword: String,
  email: String,
  isActivedAt: Boolean,
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

module.exports = mongoose.model("Admin", adminSchema);
