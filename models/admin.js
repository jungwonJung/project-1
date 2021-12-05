const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const adminSchema = new mongoose.Schema({
  password: String,
  email: String,
  isActivedAt: {
    type: Boolean,
    default: false,
  },
  createdAt: Date,
  updatedAt: Date,
  deletedAt: Date,
});

adminSchema.pre("save", function (next) {
  const admin = this;
  if (!admin.isModified("password")) {
    return next();
  } else {
    admin.password = bcrypt.hashSync(admin.password);
    return next();
  }
});

module.exports = mongoose.model("Admin", adminSchema);
