import { useEffect, useState } from "react";
import { socket } from "./socket";

export default function Chat() {
  const [user, setUser] = useState("");

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    console.log("Component Monunted");

    socket.connect();

    const onMessage = (message) => {
      setMessageList((prev) => [...prev, message]);
    };
    socket.on("chat:message", onMessage);

    return () => {
      socket.off("chat:message", onMessage);
      socket.disconnect();
      console.log("Component Unmounted");
    };
  }, []);
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />

      {messageList.map((msg, idx) => {
        return (
          <div key={idx}>
            <p>
              {msg.name} - {msg.text}
            </p>
          </div>
        );
      })}

      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (!user) {
            console.log("user is required");
            return;
          }
          socket.emit("chat:message", {
            name: user,
            text: message,
          });
        }}
      >
        <input
          type="text"
          placeholder="Your Message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit">Send</button>
      </form>
    </>
  );
}
