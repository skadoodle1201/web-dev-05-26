// ./routes/post.routes.js

const express = require("express");
const PostModel = require("../models/post");
const postRouter = express.Router();

postRouter.post("/", async (req, res) => {
  const { title, content, authorId, category } = req.body;

  const post = new PostModel({
    title,
    content,
    category,
    author: authorId,
  });
  await post.save();
  res.json({
    message: "Success",
    post: post,
  });
});

postRouter.get("/", async (req, res) => {
  const postList = await PostModel.find().populate("author"); //.populate fetches the data for the author and adds in result
  res.json({
    message: "Success",
    post: postList,
  });
});

module.exports = postRouter;
