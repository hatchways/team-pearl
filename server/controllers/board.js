const asyncHandler = require("express-async-handler");
const Board = require("../models/Board");
const User = require("../models/User");

// @route POST /boards
// @desc Create a new board
// @access Private
exports.createBoard = asyncHandler(async (req, res, next) => {
  // To create a new board, Sean should pass in the user ID
  const { user, title, description } = req.body;

  const validUser = await User.findById(user);

  if (!validUser) {
    res.status(404);
    throw new Error("The user with this ID doesn't exist");
  }

  const board = await Board.create({
    title,
    description,
  });

  if (!board) {
    res.status(404);
    throw new Error("Unable to create a new board");
  }

  // update user boards array to reflect newly created board
  await User.findByIdAndUpdate(
    user,
    {
      $push: { boards: [board.id] },
    },
    { new: true }
  );

  res.status(201).json({
    success: {
      board,
    },
  });
});

// @route PATCH /boards
// @desc update a board (can also be used to move columns within a board)
// @access Private
exports.updateBoard = asyncHandler(async (req, res, next) => {
  const { id } = req.body;
  const board = await Board.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!board) {
    res.status(400);
    throw new Error("The board with this ID doesn't exist");
  }

  res.status(201).json({
    success: {
      board,
    },
  });
});
