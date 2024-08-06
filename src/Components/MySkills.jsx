import React from 'react'
import '../Styles/MySkill.css'


const MySkills = () => {
  return (
    <>
    <section id='skills'>
    <div className="container">
      <div className="header">
        <p>My Skills</p>
        <h2>My Expertise</h2>
      </div>
      <div className="content">
        <div className="card">
          <div className="icon">
          <i className="fas fa-lightbulb"></i>
          </div>
          <h3>Problem Solving</h3>
          <p>
            Proven problem-solving skills with experience in resolving over 200 complex issues. Demonstrated ability to identify, analyze, and solve problems efficiently, resulting in a 25% decrease in downtime and improved system reliability.
         </p>
        </div>
        <div className="card">
          <div className="icon">
          <i className="fas fa-pencil-ruler"></i>
          </div>
          <h3>UI & UX Design</h3>
          <p>
           Skilled in creating intuitive and visually appealing user interfaces. Experience in UI/UX design with a focus on enhancing user experience and ensuring responsive design across various devices. Proficient in tools such as Figma and Adobe XD.
         </p>
        </div>
        <div className="card">
          <div className="icon">
              <i className="fas fa-code"></i> 
          </div>
         
          <h3>Front-End Development</h3>
            <p>
                Extensive experience in front-end development using technologies like HTML5, CSS3, JavaScript, and React. Successfully built and deployed several web applications, including ApnaKitchen, with a focus on clean code, efficient performance, and responsive design.
            </p>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default MySkills