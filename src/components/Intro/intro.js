import React from 'react';
import './intro.css';
import bg from '../../assets/image4.jpg';
// import btnImg from '../../assets/hireme.png';
import resumeImg from '../../assets/resume.png';

// import { Link } from 'react-scroll';

function Intro() {
  return (
    <section id="intro">
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Srinivasa Reddy</span><br/>CyberSecurity and<br/>BlockChain Enthusiast</span>
        {/* <p className='introPara'>Intro Paragraph</p> */}
        <div className='btnContainer'>
          {/* <Link>
            <button className='btn'>
              <img src={btnImg} alt='Hire Me' className='btnImg' />
              Hire Me
            </button>
          </Link>
          &nbsp;&nbsp; */}
          <a href="https://drive.google.com/file/d/1SYPNHf0qRBRt5xx40eLy5Z6N23mwnuQ6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button className='btn'>
              <img src={resumeImg} alt='Resume' className='btnImg' />
              Resume
            </button>
          </a>
        </div>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  );
}

export default Intro;
