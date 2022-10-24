const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a task title"],
    },
    description: {
      type: String,
      required: [true, "Please add a task description"],
    },
    status: {
      type: String,
      required: true,
      enum: ["to do", "in progress", "completed"],
    },
    priority: {
      type: String,
      required: true,
      enum: ["high", "normal", "low"],
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
