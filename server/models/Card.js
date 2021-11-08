const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  color: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    requried: true,
  },
});

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;
