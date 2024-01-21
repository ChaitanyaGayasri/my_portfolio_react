import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Work from '../components/Work'
import MyExperience from '../components/MyExperience'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg/>
        <Work/>
        <MyExperience/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Home