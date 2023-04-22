const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  originalUrl: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
});

const URLSchema = mongoose.model("URLSchema", urlSchema);

module.exports = URLSchema;
