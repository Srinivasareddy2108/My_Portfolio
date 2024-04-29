import React from 'react'
import './about.css'
import img from "../../assets/my_photo_2.jpg";

const About = () => {
  return (
    <section id="about">
      <h1 className='aboutmeTitle'>About Me</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div>
        <div className="about__content">

          <p>
          Hello, I'm Srinivasa Reddy, an enthusiastic and a 2025 graduate eager to kickstart my career in CyberSecurity and Blockchain Technology. My academic journey has equipped me with a solid foundation in CyberSecurity and Web Development, and I am excited to apply my knowledge in a real-world setting.<br/><br/>
          I distinguish myself through both academic excellence and a strong commitment to positively contribute to team projects. Eager to make a meaningful impact in Cybersecurity and Blockchain Technology, I am excited about the journey ahead.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About
