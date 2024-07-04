import React from "react";
import { useState, useRef, useEffect } from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
import List from "./List";

function Chat_div() {
  const [chat, SetChat] = useState("");
  const [chats, SetChats] = useState([]);
  
  const addChat = () => {
    if (chat !== "") {
      SetChats([...chats, chat]);
      console.log(chats);
      SetChat("");
    }
  };
  const inputRef = useRef("null");
  useEffect(() => {
    inputRef.current.focus();
  },[]);
  return (
    <div className="chat_div">
      <div className="chat_name">
        <h3>Chat Page</h3>
      </div>
      <div className="chatBox">
        {chats.map((c) => (
          <> {chats && <List message={c} />}</>
        ))}
      </div>
      <div className="message_section">
        <input
          className="message_input"
          value={chat}
          type="text"
          ref={inputRef}
          placeholder="text something"
          
          onChange={(event) => SetChat(event.target.value)}
        />
        <span className="send-icon">
          <RiSendPlane2Fill className="send-icon" onClick={addChat} />
        </span>
      </div>
    </div>
  );
}

export default Chat_div;
