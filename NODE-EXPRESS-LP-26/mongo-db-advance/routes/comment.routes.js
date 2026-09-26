const express = require("express");
const CommentModel = require("../models/comment");
const commentRouter = express.Router();

commentRouter.post("/", async (req, res) => {
  const { comment, userId, postId } = req.body;

  const commentData = new CommentModel({
    comment: comment,
    post: postId,
    commenter: userId,
  });

  await commentData.save();
  res.json({
    message: "Success",
    comment: commentData,
  });
});

commentRouter.get("/", async (req, res) => {
  const { postId } = req.query;
  const commentList = await CommentModel.find({
    post: postId,
  }).populate("commenter", "username");

  res.json({
    message: "Success",
    comment: commentList,
  });
});

module.exports = commentRouter;
