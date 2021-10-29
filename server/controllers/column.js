const asyncHandler = require("express-async-handler");
const Column = require("../models/Column");
const Board = require("../models/Board");

// @route POST /columns
// @desc Create a new column
// @access Private
exports.createColumn = asyncHandler(async (req, res, next) => {
  const { board, title } = req.body;

  const validBoard = await Board.findById(board);

  if (!validBoard) {
    res.status(404);
    throw new Error("The board with this ID doesn't exist");
  }

  const column = await Column.create({
    title,
  });

  if (!column) {
    res.status(404);
    throw new Error("Unable to create a new column");
  }

  // update board columns array to reflect newly created column
  await Board.findByIdAndUpdate(
    board,
    {
      $push: { columns: [column.id] },
    },
    { new: true }
  );

  res.status(201).json({
    success: {
      column,
    },
  });
});

// @route PATCH /columns/
// @desc update a column (can also be used to move cards within a column)
// @access Private
exports.updateColumn = asyncHandler(async (req, res, next) => {
  const { id } = req.body;
  const column = await Column.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!column) {
    res.status(400);
    throw new Error("The column with this ID doesn't exist");
  }

  res.status(201).json({
    success: {
      column,
    },
  });
});
