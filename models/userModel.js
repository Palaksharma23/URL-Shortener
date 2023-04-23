const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  password: {
    type: String,
    required: true,
    match: passwordRegex,
    minlength: 6,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  UpdatedAt: Date,
  urls: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Shorturls",
    },
  ],
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords are not the same",
    },
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
