import { useEffect, useState } from "react";
import { socket } from "./socket";
import ChatFormList from "./ChatFormList";
import Connect from "./Connect";
import GroupConnect from "./GroupConnect";
import GroupList from "./GroupList";

const recieveMessage = (newMessage, groupMessage) => {
  const { groupId } = newMessage;
  if (groupMessage[groupId]) {
    groupMessage[groupId].push(newMessage);
  } else {
    groupMessage[groupId] = [newMessage];
  }
  return JSON.parse(JSON.stringify(groupMessage));
};

export default function Chat() {
  const [user, setUser] = useState("");

  const [messageList, setMessageList] = useState({});

  const [groupList, setGroupList] = useState([]);

  const sendMessage = (message, groupId) => {
    if (!user) {
      console.log("user is required");
      return;
    }
    socket.emit("chat:message", {
      name: user,
      text: message,
      groupId,
    });
  };

  const onMessage = (message) => {
    const updatedMessageList = recieveMessage(message, messageList);
    setMessageList(updatedMessageList);
  };

  const connectToSocket = (user) => {
    setUser(user);
    socket.connect();
    socket.emit("user:connect", {
      name: user,
    });
    socket.on("chat:message", onMessage);
  };

  const disconnect = () => {
    () => {
      socket.off("chat:message", onMessage);
      socket.disconnect();
      console.log("Component Unmounted");
    };
  };

  const joinGroup = (groupName) => {
    const groupId = [user, groupName].sort().join("-");
    socket.emit("chat:join", {
      name: user,
      groupId,
    });
    setGroupList((prev) => [...prev, groupId]);
  };

  return (
    <>
      <Connect onConnect={connectToSocket} disconnect={disconnect} />
      <GroupConnect joinGroup={joinGroup} />
      <GroupList
        groupList={groupList}
        messageList={messageList}
        sendMessage={sendMessage}
      />
    </>
  );
}
