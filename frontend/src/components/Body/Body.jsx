import React from 'react'
import Chat from '../Chat/Chat.jsx'
import Featured from '../Featured/Featured.jsx'
import Profile from '../Profile/Profile.jsx'
import Stream from '../Stream/Stream.jsx'
import "./Body.css"

const Body = () => {
  return (
    <div className="body">
        <div className="body--left">
            <Featured />
            <Stream />
            <Profile />
            
        </div>
        <div className="body_right">
          <Chat />
        </div>
    </div>
  )
}

export default Body