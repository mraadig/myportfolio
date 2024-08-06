import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Me</h4>
          <ul>
            <li>Email: <a href="mailto:adityakumargupta2101@gmail.com"><i className="fas fa-envelope"></i> adityakumargupta2101@gmail.com</a></li>
            <li>Phone: <a href="tel:+918112914153"><i className="fas fa-phone"></i> (+91) 8112914153</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Me</h4>
          <ul className="social-media">
            <li><a href="https://github.com/mraadig" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/aditya-kumar-gupta-73554921b/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home"><i className="fas fa-home"></i> Home</a></li>
            <li><a href="#about"><i className="fas fa-user"></i> About</a></li>
            <li><a href="#portfolio"><i className="fas fa-project-diagram"></i> Projects</a></li>
            <li><a href="#contact"><i className="fas fa-envelope-open-text"></i> Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Aditya Kumar Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
