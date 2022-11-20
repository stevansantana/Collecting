import Message from "./Message";

const Messages = () => {
  console.log(Messages)

  return (
    <div className="messages">
      {Messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
  );
};

export default Messages;