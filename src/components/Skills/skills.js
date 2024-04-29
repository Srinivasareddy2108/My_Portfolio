import React from 'react'
import './skills.css'
import Clang from '../../assets/c.png'
import Javalang from '../../assets/Java-Logo.png'
import Reactt from '../../assets/React-icon.png'
import Nodee from '../../assets/node.png'
import Aws from '../../assets/aws_logo_smile_1200x630.png'
import Mysqll from '../../assets/mysql.png'
import Djan from '../../assets/django.png'
import spring from '../../assets/spring.png'

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>My Skills</span>
        {/* <span className="skillDesc">Something about My Skills</span> */}
        <div className="skillBars">
          <div className="skillBar">
            <img src={Clang} alt="Clang" className="skillBarImg" />
            <div className="skillBarText">
              <h2>C Language</h2>
            </div>
          </div>

          <div className="skillBar">
            <img src={Javalang} alt="Clang" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Java Language</h2>
            </div>
          </div>

          <div className="skillBar">
            <img src={Reactt} alt="Clang" className="skillBarImg" />
            <div className="skillBarText">
              <h2>ReactJs</h2>
            </div>
          </div>

          <div className="skillBar">
            <img src={Nodee} alt="Clang" className="skillBarImg" />
            <div className="skillBarText">
              <h2>NodeJs</h2>
            </div>
          </div>

          <div className="skillBar">
            <img src={Aws} alt="Clang" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Amazon Web Services</h2>
            </div>
          </div>

          <div className="skillBar">
            <img src={Mysqll} alt="Clang" className="skillBarImg" />
            <div className="skillBarText">
              <h2>MySQL</h2>
            </div>
          </div>

          <div className="skillBar">
            <img src={Djan} alt="Clang" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Django FrameWork (Python)</h2>
            </div>
          </div>

          <div className="skillBar">
            <img src={spring} alt="Clang" className="skillBarImg" />
            <div className="skillBarText">
              <h2>Spring Boot FrameWork (Java)</h2>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills
