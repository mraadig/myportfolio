import React from 'react'
import '../Styles/Header.css';
import  img from '../assets/2.png';
const Header = () => {
  return (
    <>
    <div className="Header">
    <img src={img} alt='xyz'></img>
    <nav>
    <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    </ul>
    </nav>   
    <a href="#contact"><button className='btn' >Contact </button></a>
    </div>
    </>
  )
}

export default Header