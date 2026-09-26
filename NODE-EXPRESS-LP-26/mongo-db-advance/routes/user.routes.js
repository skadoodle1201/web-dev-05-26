// /routes/user.routes.js
const express = require("express");
const UserModel = require("../models/user");

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  const { username } = req.body;
  const user = new UserModel({
    username,
  });
  await user.save();
  res.json({
    message: "Success",
    user: user,
  });
});

module.exports = userRouter;
