import { useEffect, useState } from "react";

const Connect = ({ onConnect, disconnect }) => {
  const [joinChat, setJoinChat] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    if (joinChat) {
      onConnect(user);
    }
    return disconnect();
  }, [joinChat]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (user) {
            setJoinChat(true);
          }
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <button type="submit">Join Chat</button>
      </form>
    </div>
  );
};

export default Connect;
