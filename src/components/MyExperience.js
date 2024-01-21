import "./MyExperience.css"
import css from "../assets/css.png"
import github from "../assets/github.png"
import html from "../assets/html.png"
import nextjs from "../assets/nextjs.png"
import react from "../assets/react.png"
import javascript from "../assets/javascript.png"

const MyExperience = () => {
    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: javascript,
            title: "JAVASCRIPT",
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: github,
            title: "GITHUB",
            style: "shadow-gray-400"
        },
        {
            id: 5,
            src: nextjs,
            title: "NEXTJS",
            style: "shadow-white"
        },
        {
            id: 6,
            src: react,
            title: "REACT",
            style: "shadow-blue-600"
        },
    ]



  return (
    <div>
        <div className="hero-image">
            <div className="check">
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">Experinces</p>
                <p className="py-6">These are the Technologies I have Worked On</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

                {techs.map(({id,src,title,style}) => 
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className="w-20 mx-auto"/>
                <p className="mt-4">{title}</p>
                </div>
                )}
                
            </div>
        </div>
    </div>
  )
}

export default MyExperience