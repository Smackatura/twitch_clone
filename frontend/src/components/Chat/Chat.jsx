import React, { useState } from 'react';
import DisplayChat from '../DisplayChat/DisplayChat'
import "./Chat.css"

const Chat = (props) => {
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="chat">
        <div className="chat__top">
        <hr />
        
        <p>Welcome to the chat room!</p>
        </div>
    
        <div className="chat__content">
            {props.msg}
        </div>
        <div className="chat__bottom">
            <form className="chatbox__formTop" action="" onSubmit={ handleSubmit }>
                <input 
                onChange={ (e) => setMsg(e.target.value) }
                type="text"
                value= {msg}
                placeholder="Send a message"/>
                <input className="chat__inputRight" type="submit" />
            </form>
            <div className="chatbox__formBottom">
                
                <input className="chat__inputRight" type="submit" />
            </div>
            <button className="claim"></button>
        </div>
        
        
        
    </div>
  )
}

export default Chat