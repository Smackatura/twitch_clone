import React from 'react'
import RecentItem from '../RecentItem/RecentItem'
import "./Profile.css"

const Profile = () => {
  return (
    <div className="profile">
        <div className="profile__topLeft">
            <img src="https://media-exp1.licdn.com/dms/image/C5603AQEvSPcBuzcfpQ/profile-displayphoto-shrink_200_200/0/1660516205784?e=1667433600&v=beta&t=sBFE2iPXVkf_xtJYb40tuohukWg9bIWixFgYlZuGH2k" alt="" />

            <div className="profile__topLeftDetails">
                <h1>LiamsWorld</h1>
                <h3><span className="live">LIVE</span> 4.2k viewers</h3>
            </div>
        </div>
        <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsia-v"></i>
        </div>
        <div className="profile__menu">
            <h2 className="active">Home</h2>
            <h2>About</h2>
            <h2>Schedule</h2>
            <h2>Videos</h2>
            <h2><i className="fas fa-arrow-up"></i></h2>
            <h2>Chat</h2>
            
        </div>

        <div className="profile__recent">
            
            <div className="profile__recentItems"></div>
                <RecentItem 
                    url={"https://www.youtube.com/embed/6OKssWCEnAw"}
                    title={"Build a Crypto app using Firebase / Coin"}
                />
                <RecentItem 
                    url={"https://www.youtube.com/embed/M5QY2_8704o"}
                    title={"Music to Code to."}
                />
                <RecentItem 
                    url={"https://www.youtube.com/embed/M5QY2_8704o"}
                    title={"Music to Code to."}
                />
                <RecentItem 
                    url={"https://www.youtube.com/embed/M5QY2_8704o"}
                    title={"Music to Code to."}
                />
            </div>
            <div className="profile_categories">
                <h2>LiamsWorld's recently streamed Categories</h2>
                <img src="https://static-cdn.jtvnw.net/ttv-boxart/509670-624x832.jpg" alt="poster" />
                <h3>Science & Technology</h3>
            </div>
    </div>
  )
}

export default Profile