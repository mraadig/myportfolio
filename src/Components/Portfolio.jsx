// src/Portfolio.js
import React from 'react';
import '../Styles/Portfolio.css';
import apnakitchen from '../assets/ApnaKitchen.png'
import myntraclone from '../assets/MyntraClone.png'
const Portfolio = () => {
  return (
    <section id="portfolio">
    <div className="portfolio">
        <h1>My Portfolio</h1>
      <div className="portfolio-header">
        
        <h2>Frontend Development</h2>
        <button className="github" onClick={() => window.open('https://github.com/mraadig', '_blank')}>GitHub</button>
      </div>
      <div className="portfolio-projects">
        <div className="project">
          <img src={apnakitchen} alt="ApnaKitchen" />
          <div className="project-info">
            <h2>ApnaKitchen</h2>
            <p>ApnaKitchen is a React-based web application that utilizes the Swiggy API to display restaurant menus. Users can browse dishes, add items to their cart, and place orders seamlessly.</p>
            <a href="https://apnakitchenbyaadi.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
            <br></br>
            <a href="https://github.com/mraadig/reactlivewebsite" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          
          </div>
        </div>
        <div className="project">
          <img src={myntraclone} alt="FoodFire" />
          <div className="project-info">
            <h2>Myntra Clone</h2>
            <p>This project is designed to demonstrate proficiency in frontend development technologies, including HTML, CSS, and JavaScript. The clone offers a similar user experience to Myntra, showcasing various fashion products, allowing users to browse categories, view product details, and add items to their cart.</p>
            <a href="https://ecommercecloneakg.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">View Live</a>
            <br></br>
            <a href="https://github.com/mraadig/Myntra-Clone" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Portfolio;
