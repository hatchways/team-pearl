const asyncHandler = require("express-async-handler");
const Card = require("../models/Card");
const Column = require("../models/Column");

// @route POST /cards
// @desc Create a new card
// @access Private
exports.createCard = asyncHandler(async (req, res, next) => {
  const { column } = req.body;
  req.body.column = undefined;

  const validColumn = await Column.findById(column);

  if (!validColumn) {
    res.status(404);
    throw new Error("The column with this ID doesn't exist");
  }

  const card = await Card.create(req.body);

  if (!card) {
    res.status(404);
    throw new Error("Unable to create a new card");
  }

  // update column cards array to reflect newly created card
  await Column.findByIdAndUpdate(
    column,
    {
      $push: { cards: [card.id] },
    },
    { new: true }
  );

  res.status(201).json({
    success: {
      card,
    },
  });
});

// @route PATCH /cards
// @desc update a card
// @access Private
exports.updateCard = asyncHandler(async (req, res, next) => {
  const { id } = req.body;
  const card = await Card.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!card) {
    res.status(400);
    throw new Error("The card with this ID doesn't exist");
  }

  res.status(201).json({
    success: {
      card,
    },
  });
});
