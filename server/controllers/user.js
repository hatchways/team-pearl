const asyncHandler = require("express-async-handler");
const User = require("../models/User");

// @route POST /users
// @desc Search for users
// @access Private
exports.searchUsers = asyncHandler(async (req, res, next) => {
  const searchString = req.query.search;

  let users;
  if (searchString) {
    users = await User.find({
      username: { $regex: searchString, $options: "i" },
    });
  }

  if (users.length === 0) {
    res.status(404);
    throw new Error("No users found in search");
  }

  res.status(200).json({ users: users });
});
