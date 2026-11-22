import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "http://localhost:5173" },
});

const groupUserMap = {};
const userSocketConnections = {};

io.on("connection", (socket) => {
  socket.on("user:connect", (data) => {
    const { name } = data;
    console.log(`Connection established for user ${name}`);
    userSocketConnections[name] = socket;
  });

  socket.on("chat:join", (data) => {
    // { groupId - Name who is joining }
    const { groupId, name } = data;
    if (groupUserMap[groupId]) {
      groupUserMap[groupId].add(name);
    } else {
      groupUserMap[groupId] = new Set([name]);
    }
  });

  socket.on("chat:message", (data) => {
    const { groupId } = data;

    const usersInGroup = Array.from(groupUserMap[groupId]);
    usersInGroup.forEach((user) => {
      const userSocket = userSocketConnections[user];
      userSocket.emit("chat:message", {
        name: data.name,
        text: data.text,
        groupId: groupId,
      });
    });
  });
});

httpServer.listen(3000, () => {
  console.log("Server Socket running at 3000");
});
