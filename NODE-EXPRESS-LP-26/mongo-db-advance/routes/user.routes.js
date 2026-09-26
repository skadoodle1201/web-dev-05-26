// /routes/user.routes.js
const express = require("express");
const UserModel = require("../models/user");
const bcrypt = require("bcrypt");
const { signJWT } = require("../helper");

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  const { username, password } = req.body;

  const hashPass = await bcrypt.hash(password, 10);

  const user = new UserModel({
    username,
    password: hashPass,
  });
  await user.save();

  res.json({
    message: "Success",
    user: user,
  });
});

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({
    username,
  });

  if (!user) {
    res.status(400).json({
      message: "Username or Password is invalid",
    });
  }

  const hashedPass = user.password;
  const isValidPass = await bcrypt.compare(password, hashedPass);

  if (!isValidPass) {
    res.status(400).json({
      message: "Username or Password is invalid",
    });
  }

  const accessToken = await signJWT(
    {
      user: { id: user.id, username: user.username },
    },
    "1h",
  );

  res.json({
    message: "Success",
    user: {
      username: user.username,
      accessToken,
    },
  });
});
module.exports = userRouter;
