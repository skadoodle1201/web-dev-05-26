import React, { useState } from "react";

function ChatFormList({ messageList, groupId, sendMessage }) {
  const [message, setMessage] = useState("");

  return (
    <div>
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
          sendMessage(message, groupId);
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
    </div>
  );
}

export default ChatFormList;
