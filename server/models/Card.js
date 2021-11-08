const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  deadline: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  attachement: String,
  checkList: [String],
  comment: String,
  cover: String,
  description: String,
  tag: String,
});

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;
