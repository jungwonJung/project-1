const mongoose = require("mongoose");

const collorSchema = new mongoose.Schema({
  neck: Number,
  width: Number,
  size: String,
});

module.exports = mongoose.model("Collor", collorSchema);
