const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  boards: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Board",
    },
  ],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now,
    select: false,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  avatar: String,
  cloudinary_id: String,
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.isMatch = async function (oldPassword, password) {
  return await bcrypt.compare(oldPassword, password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
