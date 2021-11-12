const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
const Board = require("../models/Board");

// @route POST /auth/register
// @desc Register user
// @access Public
exports.registerUser = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;

  const emailExists = await User.findOne({ email });

  if (emailExists) {
    res.status(400);
    throw new Error("A user with that email already exists");
  }

  const usernameExists = await User.findOne({ username });

  if (usernameExists) {
    res.status(400);
    throw new Error("A user with that username already exists");
  }

  // create a new board before creating a user.
  const board = await Board.create({});

  // populate the boards with the columns before sending to the frontend
  const user = await User.create({
    username,
    email,
    password,
    boards: board._id,
  });

  user.password = undefined;
  user.register_date = undefined;

  if (user) {
    const token = generateToken(user._id);
    const secondsInWeek = 604800;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: secondsInWeek * 1000,
    });

    res.status(201).json({
      success: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
        },
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @route POST /auth/login
// @desc Login user
// @access Public
exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = generateToken(user._id);
    const secondsInWeek = 604800;

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: secondsInWeek * 1000,
    });

    res.status(200).json({
      success: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          avatar: user.avatar,
        },
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @route GET /auth/user
// @desc Get user data with valid token
// @access Private
exports.loadUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error("Not authorized");
  }

  res.status(200).json({
    success: {
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        avatar: user.avatar,
      },
    },
  });
});

// @route GET /auth/logout
// @desc Logout user
// @access Public
exports.logoutUser = asyncHandler(async (req, res, next) => {
  res.clearCookie("token");

  res.status(200).json({
    success: {
      message: "You have successfully logged out",
    },
  });
});

// @route GET /auth/demo-user
// @desc Load demo user
// @access Private
exports.loadDemoUser = asyncHandler(async (req, res, next) => {
  let demoUser;
  const demoUserExists = await User.findOne({ email: "demoUser@email.com" });

  if (!demoUserExists) {
    demoUser = await User.create({
      email: "demoUser@email.com",
      username: "demoUser",
      password: "demoUser123",
    });
  } else {
    demoUser = demoUserExists;
  }

  const token = generateToken(demoUser._id);
  const secondsInWeek = 604800;

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: secondsInWeek * 1000,
  });

  res.status(200).json({
    success: {
      user: {
        id: demoUser._id,
        username: demoUser.username,
        email: demoUser.email,
      },
    },
  });
});

// @route PATCH /auth/update
// @desc update a user's password
// @access Private
exports.updatePassword = asyncHandler(async (req, res, next) => {
  const { password, oldPassword } = req.body;

  const user = await User.findById(req.user.id).select("+password");

  if (!user) {
    res.status(400);
    throw new Error("The user with this ID doesn't exist");
  }

  if (!(await user.isMatch(oldPassword, user.password))) {
    res.status(400);
    throw new Error("Incorrect password");
  }

  user.password = password;

  await user.save();

  res.status(201).json({
    success: {
      email: user.email,
      username: user.username,
    },
  });
});
