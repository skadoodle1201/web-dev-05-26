import ChatFormList from "./ChatFormList";

const GroupList = ({ groupList, messageList, sendMessage }) => {
  return (
    <div>
      <div>
        {groupList.map((grp) => {
          return (
            <>
              <h3>{grp}</h3>
              <ChatFormList
                messageList={messageList[grp] || []}
                groupId={grp}
                sendMessage={sendMessage}
              />
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default GroupList;
