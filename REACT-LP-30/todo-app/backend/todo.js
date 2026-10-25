const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * task : string
 * status : boolean
 * timestamps
 */
const todoSchema = new Schema(
  {
    task: {
      type: String,
      required: true,
      minLength: 3,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Todo = new mongoose.model("todo", todoSchema);
module.exports = Todo;
