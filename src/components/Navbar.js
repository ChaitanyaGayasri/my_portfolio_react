import "./Navbar.css"


import React, { useState } from 'react'
import {Link} from "react-router-dom"
import {FaBars, FaTimes} from "react-icons/fa"

const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)


  return (
    <div className="Header">
        <Link to="/">
            <h1 className="text-4xl font-bold font-LogoName">Chaitanya.</h1>
        </Link>
        <ul className={click ? "nav-menu active": "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
                </li>
                <li><Link to="/project">Project</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/experience">Experience</Link></li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            { click ?(<FaTimes size={20} style={{color: "#fff"}}/>):(
            <FaBars size={20} style={{color: "#fff"}}/>)
}
        </div>
    </div>
  )
}

export default Navbar