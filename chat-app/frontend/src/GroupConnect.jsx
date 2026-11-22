import { useState } from "react";

const GroupConnect = ({ joinGroup }) => {
  const [groupName, setGroupName] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          joinGroup(groupName);
        }}
      >
        <input
          onChange={(e) => {
            setGroupName(e.target.value);
          }}
        />
        <button type="submit">Chat in Group</button>
      </form>
    </div>
  );
};

export default GroupConnect;
