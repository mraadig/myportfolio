import React from 'react'
import '../Styles/Body.css'
import profile from '../assets/photo1.png'
const Body = () => {
  return (
    <section  id="home" style={{background:"#F5FCFF"}}>
    <div className="body">
    <div className="container1">
    <div className="intro">
      <p className="intro-greeting">Hi there, I'm Aditya</p>
      <h1 className="intro-title"><span style={{color:'#5E3BEE'}}>Frontend Developer</span> & Problem Solver</h1>
      <p className="intro-description">
        I'm Aditya Kumar Gupta, a passionate and skilled frontend developer with a strong background in Information Technology. Currently, I'm in my fourth year of pursuing a Bachelor's degree in IT, where I've honed my skills in web development and problem-solving.
      </p>
    </div>
    <br></br>
    <a href='#contact'><button className='btn'>Get in touch</button></a>
    </div>
    <div className="container2">
    <img src={profile}></img>
    </div>
    </div>
    </section>
  )
}

export default Body