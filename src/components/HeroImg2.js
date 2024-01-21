import "./HeroImg2.css"

import React from 'react'

const HeroImg2 = (props) => {
    const {Heading,Text} = props
  return (
    <div className="hero-img">
        <div className="heading"> 
        <h1>{Heading}</h1>
        <p>{Text}</p>
        </div>
    </div>
  )
}

export default HeroImg2