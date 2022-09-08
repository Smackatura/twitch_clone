import React from 'react'
import "./Chat.css"

function Chat() {
  return (
    <div className="chat">
        <div className="chat__top">
        <hr />
        
        <p>Welcome to the chat room!</p>
        </div>
    
        <div className="chat__content">

        </div>
        <div className="chat__bottom">
            <div className="chatbox__formTop"action="">
                <input type="text" placeholder="Send a message"/>
            </div>
            <div className="chatbox__formBottom">
                <button className="claim"></button>
                <input className="chat__inputRight"type="submit" />
            </div>
        </div>
        
        
        
    </div>
  )
}

export default Chat