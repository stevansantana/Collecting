import React, {  useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  const handleSend = async () => {

    setText("");
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Escreva algo..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
        />
        <label htmlFor="file">
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;