import React from 'react'
import "./Sidebar.css"
import Channel from '../Channels/Channel'

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebar__top">
            <h5>Followed Channels</h5>
            <Channel avatar="https://avatars.githubusercontent.com/u/82985907?v=4"
                name="SeraphDevTV"
                followers="120k" />
            <Channel avatar="https://avatars.githubusercontent.com/u/75331586?v=4"
                name="StuartYeeTV"
                followers="109k" />
            <h5>Recommended Channels</h5>
            <Channel avatar="https://avatars.githubusercontent.com/u/12469377?v=4"
                name="Iron_Warrior"
                followers="489k" />

            <p className="sidebar__topShowMore">Show More</p>
        </div>

        <div className="sidebar__bottom">
            <div className="sidebar__bottomContainer">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search to add friends" />
            </div>
        </div>
    </div>
    
  )
}

export default Sidebar