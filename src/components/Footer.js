import "./Footer.css"
import {FaHome,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa"
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                </div>
                <div>
                    <p>1-299 Santhabommali Mandal</p>
                    <p>Srikakulam,</p>
                </div>
                <div className="phone">
                <h1 className="phn-head"><FaPhone size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                7702480734 </h1>
                </div>
                <div className="email">
                <h1 className="phn-head"><FaMailBulk size={20} style={{color:"#fff",marginRight: "2rem"}}/>
                chaitanyagayasri99@gmail.com </h1>
                </div>
            </div>
            <div className="right">
                <h1 className="phn-head">About the Company</h1>
                <p>I have Worked as a Frontend Developer at Oasis Infobyte and 
                    I learned Technologies Using Responsive Web Design Flexbox  I have developed
                    Layouts and I worked Lot of Projects on Training Days
                </p>
                <div className="social">
                <FaFacebook size={30} style={{color:"#fff",marginRight: "1rem"}}/>
                <FaTwitter size={30} style={{color:"#fff",marginRight: "1rem"}}/>
                <FaLinkedin size={30} style={{color:"#fff",marginRight: "1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer