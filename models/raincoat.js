const mongoose = require("mongoose");

const raincoatSchema = new mongoose.Schema({
  back: Number,
  neck: Number,
  chest: Number,
  size: String,
});

module.exports = mongoose.model("Raincoat", raincoatSchema);
