const mongoose = require("mongoose");

const harnessSchema = new mongoose.Schema({
  back: Number,
  neck: Number,
  chest: Number,
  size: String,
});

module.exports = mongoose.model("Harness", harnessSchema);
