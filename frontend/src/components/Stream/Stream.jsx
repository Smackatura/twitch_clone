import React from 'react'
import './Stream.css'

function Stream() {
  return (
    <div className="stream">
        <div className="stream__status">
            <div className="stream__statusContainer">
                <div className="stream__statusContainerTop">
                    <div className="stream__statusIndicator">OFFLINE</div>
                    <h2>Check out the below streams for LiamsWorld</h2>
                </div>
                <div className="stream__statusInfo">
                    <i className="fas fa-bell"></i>
                    <p>You will be notified when LiamsWorld is live</p>
                </div>
            </div>
        </div>
        {/* <div className="stream__videoEmbed">
        <iframe 
            width="500" 
            height="295" 
            src="https://www.youtube.com/embed/QXxNlpjnulI" 
            title="Blazor in 100 Seconds" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div> */}
    </div>
  )
}

export default Stream