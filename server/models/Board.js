const mongoose = require("mongoose");
const Column = require("./Column");

const boardSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "My First Board",
    required: true,
  },
  description: {
    type: String,
    default: "my first board",
  },
  columns: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Column",
    },
  ],
});

boardSchema.pre("save", async function (next) {
  if (this.isNew) {
    const columns = await Column.create([
      { title: "in-progress" },
      { title: "completed" },
    ]);

    this.columns = columns.map((column) => column._id);
  }

  next();
});

const Board = mongoose.model("Board", boardSchema);
module.exports = Board;
