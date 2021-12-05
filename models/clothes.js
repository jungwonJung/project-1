const mongoose = require("mongoose");

const clothesSchema = new mongoose.Schema({
  back: Number,
  neck: Number,
  chest: Number,
  size: String,
});

module.exports = mongoose.model("Clothes", clothesSchema);
