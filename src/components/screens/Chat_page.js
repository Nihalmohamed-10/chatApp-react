import React from "react";
import Contacts from "./Contacts";
import Chat_div from "./Chat_div";
import Navbar from "./Navbar";


 function Chat_page() {
  
  return (
    <div>
      <Navbar/>
      <div className="chat_container">
        <Contacts/>
        <Chat_div/>
      
      </div>
    </div>
   
  );
}

export default Chat_page;
