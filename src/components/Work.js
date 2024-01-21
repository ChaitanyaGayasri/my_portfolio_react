import React from "react"
import "./ProjectCard.css"
import ProjectCard from "./ProjectCard"


const Work = () => {
    

const ProjectCardData =  [

    {   
        id:1,
        imgsrc: "https://i.im.ge/2024/01/14/3Go8X0.ProductImg.png",
        title: "Create Product List Page",
        text: "I Have Created the Technologies like Html and Css and Javascript, TailwindCss Features added Google Fonts and Media Quaries are mobile screen to responsines Main Methods , Fetch Api Call ,Find Method and Filter Function",
        view: "https://65a16aba40334615fc1bee80--eclectic-haupia-466dea.netlify.app/",
        source: "https://github.com/ChaitanyaGayasri/product_list_page"
    },
    {
        id:2,
        imgsrc: "https://i.im.ge/2024/01/17/YdovZy.Screenshot-10.png",
        title: "React-Todo-List-App",
        text: "Building using react app to create a to-do-list-app the main features I have added on this project is functional based components and filter function and find method ,onsubmit Form Button Functionality, map function and Delete todo and Edit button   ",
        view: "https://loquacious-churros-200c56.netlify.app/",
        source: "https://github.com/ChaitanyaGayasri/react_todo_list_app"
    },
    {
        id:3,
        imgsrc: "https://i.im.ge/2024/01/21/YEAixY.Screenshot-11.png",
        title: "Css Amimation Project",
        text: "I have developed the weather report while fetching the data from api call user can view the details of weather report and view the real time forcast the main features are added on hooks like useeffect, usestate hooks and Fetch Api call method get the data from api browser ",
        view: "https://gleaming-lollipop-ce6cef.netlify.app/",
        source: "https://github.com/ChaitanyaGayasri/weather_report_app"
    },

    {
        id:4,
        imgsrc: "https://i.im.ge/2024/01/21/YECAZ9.Screenshot-12.png",
        title: "Wekipedia Search Application",
        text: "Building using react app to create a to-do-list-app the main features I have added on this project is functional based components and filter function and find method ,onsubmit Form Button Functionality, map function and Delete todo and Edit button   ",
        view: "https://gayasri.ccbp.tech/",
        source: "https://github.com/ChaitanyaGayasri/wekipedia_search"
    },


]

    return(
        <div className="work-container">
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">
                {ProjectCardData.map((ele,id)=> {
                    return(
                        <ProjectCard key={id}
                        title={ele.title}
                        view={ele.view}
                        imgsrc={ele.imgsrc}
                        text={ele.text}
                        source={ele.source}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Work