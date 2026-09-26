const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 100,
    },
    content: {
      type: String,
      required: true,
      minLength: 3,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    category: {
      type: String,
      enum: ["tech", "sports", "entertainment"],
      required: true,
    },
  },
  { timestamps: true }, //Creates a created_at and updated_at
);

const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;
