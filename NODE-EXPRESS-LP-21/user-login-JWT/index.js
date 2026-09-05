const express = require("express");
const User = require("./user-model");
const UserList = require("./userlist-model");
const { hashPass } = require("./helper");

const jwt = require("jsonwebtoken");
const JWT_SECRET = "thisIsPrivatKey";

const app = express();

const UserListData = new UserList();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Application started successfully");
});

app.post("/user", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const hashedPassword = await hashPass(password);
  const user = new User(username, hashedPassword);
  UserListData.add(user);
  res.json({
    message: "success",
  });
});

const isAuthenticatedMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    console.log(":TOJE", token);
    const [_, userToken] = token.split(" ");

    const jwtPayload = jwt.verify(userToken, JWT_SECRET);
    req.user = jwtPayload.user;

    next();
  } catch (error) {
    return res.json({
      message: "Unauthorized",
    });
  }
};

const isAdminMiddleware = (req, res, next) => {
  const user = req.user;
  if (!user.roles.includes("admin")) {
    return res.json({
      message: "Unauthorized",
    });
  }
  next();
};

app.get(
  "/user-all",
  isAuthenticatedMiddleware,
  isAdminMiddleware,
  (req, res) => {
    const userList = UserListData.getAll();
    return res.json({
      message: "Success",
      data: userList,
    });
  },
);

app.get("/login", async (req, res) => {
  const username = req.query.username;
  const password = req.query.password;
  const user = await UserListData.get(username, password);
  if (Object.keys(user).length == 0) {
    return res.json({
      message: "Invalid username or password",
    });
  }

  const token = jwt.sign(
    { user: { username: user.username, roles: user.roles } },
    JWT_SECRET,
    {
      expiresIn: "5s",
    },
  );

  res.json({
    message: "Success",
    data: {
      username: user.username,
      token: token,
    },
  });
});

(async () => {
  const username = "tanish";
  const password = "xyz";
  const hashedPassword = await hashPass(password);
  const user = new User(username, hashedPassword, ["user", "admin"]);
  UserListData.add(user);
})();

app.listen(3000, () => {
  console.log("Application started on http://localhost:3000");
});
