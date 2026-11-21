import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "http://localhost:5173" },
});

io.on("connection", (socket) => {
  socket.on("chat:message", (data) => {
    io.emit("chat:message", {
      name: data.name,
      text: data.text,
    });
  });
  io.emit("chat:message", {
    name: "SYSTEM",
    text: "Someone Joined Chat",
  });
});

httpServer.listen(3000, () => {
  console.log("Server Socket running at 3000");
});
