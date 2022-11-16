import Messages from "./Messages";


const Chat = () => {

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>'Username'</span>
        <div className="chatIcons">
        </div>
      </div>
      <Messages />
    </div>
  );
};

export default Chat;