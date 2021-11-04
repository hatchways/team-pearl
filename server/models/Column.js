const mongoose = require("mongoose");

const columnSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cards: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Card",
    },
  ],
});

const Column = mongoose.model("Column", columnSchema);
module.exports = Column;
