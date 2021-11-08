const asyncHandler = require("express-async-handler");
const User = require("../models/User");

const {
  uploadToCloudinary,
  deleteFromCloudinary,
} = require("../utils/cloudinary");

// @route GET /users
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

// @route POST /users/upload-image
// @desc upload user profile picture
// @access Private
exports.uploadImage = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.user.id);

  if (user.cloudinary_id) {
    await deleteFromCloudinary(user.cloudinary_id);
  }

  const image = await uploadToCloudinary(req.file.path);

  user = await User.findByIdAndUpdate(
    req.user.id,
    {
      avatar: image.secure_url,
      cloudinary_id: image.public_id,
    },
    { new: true }
  );

  res.status(200).json({
    success: {
      user,
    },
  });
});

// @route DELETE /users
// @desc delete user profile picture
// @access Private
exports.deleteImage = asyncHandler(async (req, res, next) => {
  await deleteFromCloudinary(req.body.cloudinary_id);

  const user = await User.findOneAndUpdate(
    { _id: req.user.id },
    { $unset: { cloudinary_id: "", avatar: "" } },
    { new: true }
  );

  res.status(200).json({
    success: {
      user,
    },
  });
});

// @route PATCH /users/update
// @desc update a user's detail
// @access Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.user.id, req.body, {
    new: true,
  });

  if (!user) {
    res.status(400);
    throw new Error("The user with this ID doesn't exist");
  }

  res.status(201).json({
    success: {
      user,
    },
  });
});
