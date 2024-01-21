 import React from "react"
// import { NavLink } from "react-router-dom"

const ProjectCard =(props) => {
    

    return(
        <div className= "project-card">
                    <img src={props.imgsrc} alt="pro-img"/>
                <h1 className="project-title">{props.title}</h1>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns" key={props.id}>
                    <a  className ="btn" href={props.view} target="_blank"  rel="noreferrer">View</a>
                    <a  className ="btn" href={props.source} target="_blank"  rel="noreferrer">Source</a>
                    </div>
                </div>
                </div>
    )
}

export default ProjectCard