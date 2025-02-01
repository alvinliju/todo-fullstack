const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const todoSchema = new mongoose.Schema({
  title: String,
  userId: {
    type: String,
    required: true,
    ref: "User", //Refrence to User model
  },
  _id: {
    type: String,
    default: uuidv4,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = Todo;
