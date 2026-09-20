const express = require("express");
const connectMongo = require("./db/config");
const app = express();

const userRouter = require("./routes/user.routes");
const postRouter = require("./routes/post.routes");

(async () => {
  await connectMongo();
})();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    status: "Ok",
  });
});

app.use("/user", userRouter);

app.use("/post", postRouter);

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
