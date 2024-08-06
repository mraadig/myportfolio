import React from 'react';
import '../Styles/About.css';

const About = () => {
  return (
    <section id="about">
    <div className="about">
      <div className="container1">
        <div className="about-content">
          <p style={{fontWeight:"bolder"}}>About</p>
          <h1>About Me</h1>
          <p>
            Hi, I'm Aditya Kumar Gupta, a frontend developer passionate about creating engaging web experiences. I’m pursuing a Bachelor’s degree in Information Technology and have a strong foundation in web development.
          </p>
          <p>
            My skills include HTML5, CSS3, JavaScript, React.js, and Java. I've developed projects like <strong>ApnaKitchen</strong>, which integrates the Swiggy API to showcase restaurant menus.
          </p>
          <div className="skills">
            <div className="skill html">
              <i className="fab fa-html5"></i>
              <p>HTML5</p>
            </div>
            <div className="skill css">
              <i className="fab fa-css3-alt"></i>
              <p>CSS3</p>
            </div>
            <div className="skill js">
              <i className="fab fa-js"></i>
              <p>JavaScript</p>
            </div>
            <div className="skill react">
              <i className="fab fa-react"></i>
              <p>React.js</p>
            </div>
            <div className="skill java">
              <i className="fab fa-java"></i>
              <p>Java</p>
            </div>
            <div className="skill uiux">
              <i className="fas fa-palette"></i>
              <p>UI/UX</p>
            </div>
            <div className="skill problem-solving">
              <i className="fas fa-bug"></i>
              <p>Problem-solving</p>
            </div>
            <div className="skill api">
              <i className="fas fa-exchange-alt"></i>
              <p>API integration</p>
            </div>
          </div>
          <p>
            I’m keen on learning new technologies and enjoy drawing, photography, and exercising. Feel free to explore my portfolio and get in touch for collaborations.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
