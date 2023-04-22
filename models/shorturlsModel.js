const mongoose = require("mongoose");
const slugify = require("slugify");
const validator = require("validator");

const tourSchema = new mongoose.Schema({
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

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
