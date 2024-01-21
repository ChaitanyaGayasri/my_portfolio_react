
import "./HeroImg.css"
// import {BsFillPersonLinesFill} from "react-icons/bs"
import React from 'react'

const HeroImg = () => {

    // const links = [
    //     {
    //         id: 1,
    //         child: (
    //             <>
    //             Resume <BsFillPersonLinesFill size={30}/>
    //             </>
    //         ),
    //         href: "/Resume10.pdf",
    //         download: true
    //     }
    // ]

  return (
    <div className="hero">
         <div className="mask">
            <img className="intro-image" alt="intro"src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"/>
        </div>
          <div className="content">
            <h1>React Developer</h1>
        </div>   
      <div className="home-container">
     <div className="home-content">
       <h1 className="home-heading">I'm a <span className="span">Frontend Developer</span></h1>
       <p className="home-description">
       I Worked as Full Stack developer at NextWave since 8 months 
       learning new technologies and using responsive web design layout
      to develop the web pages. I enjoy turning complex problems into simple,making website responsive.
      My aim is to become frontend devloper that i can assure make people lives better using my skills and building the web applications effective and attractive towards learning new things, solveing complex problems..
       </p>

       <a href="Resume10.pdf" download>Resume</a>
       
       {/* <div className="display">
        
                <ul>
                    {links.map((item) => {
                        <li key={item.id} className={"btn"}>
                        <a className="btn" href={item.href} download={item.download} target="_blank" rel="noreferrer">
                        {item.child}
                        </a>
                        </li>
                    })}
                    
                </ul>
            </div> */}
     </div>
     <img
       src="https://i.postimg.cc/brJC2dZR/8222-1.jpg"
       alt="Profile"
       className="home-desktop-img"
     />
   </div> 
    </div>
  )
}

export default HeroImg