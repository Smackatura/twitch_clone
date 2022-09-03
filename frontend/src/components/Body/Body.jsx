import React from 'react'
import Profile from '../Profile/Profile.jsx'
import Stream from '../Stream/Stream.jsx'
import "./Body.css"

const Body = () => {
  return (
    <div className="body">
        <div className="body--left">
            <Stream />
            <Profile />
        </div>
        <div className="body_rightPlaceHolder">

        </div>
    </div>
  )
}

export default Body