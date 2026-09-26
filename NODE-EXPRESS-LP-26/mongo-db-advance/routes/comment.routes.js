const express = require("express");
const CommentModel = require("../models/comment");
const { validUser } = require("../middleware/auth");
const commentRouter = express.Router();

commentRouter.use(validUser);

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

commentRouter.patch("/:commentId", async (req, res) => {
  const { userDetails } = req;

  console.log(userDetails);
  const { commentId } = req.params;
  const { comment } = req.body;

  await CommentModel.findOneAndUpdate(
    { _id: commentId, commenter: userDetails.id },
    {
      comment: comment,
    },
  );

  res.json({
    message: "Update Success",
  });
});

module.exports = commentRouter;
