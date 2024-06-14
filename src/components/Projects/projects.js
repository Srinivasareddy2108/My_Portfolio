import React from 'react'
import './projects.css'
import IMG1 from "../../assets/Screenshot (1218).png";
import IMG2 from "../../assets/Screenshot (1219).png";
import IMG3 from "../../assets/agri_app.png";

const Projects = () => {
  return (
    <section className="projects">
        <h2>My Projects</h2>

        <div className="projects__cards">

            <div className="projects__card">
                <h3>TODO List</h3>
                <img src={IMG1} alt="Uniswap Swap Page" />
                <p>Simple React todo list app for task organization. Allows adding, completing, and deleting tasks with ease.</p>

                <a href="https://65b0bcd5a44229513bba18e1--lively-seahorse-40acc2.netlify.app/" target="_blank" rel="noreferrer" className="button">Site</a>
                <a href="https://github.com/Srinivasareddy2108/TODO_List_Deploy" target="_blank" rel="noreferrer" className="button">Code</a>
            </div>

            <div className="projects__card">
                <h3>Doctor App</h3>
                <img src={IMG2} alt="Compound Landing Page" />
                <p>MERN stack doctor appointment booking app enables users to schedule appointments, view doctor availability, and manage bookings efficiently.</p>

                <a href="https://github.com/Srinivasareddy2108/Doctor-App-2-" target="_blank" rel="noreferrer" className="button">Site</a>
                <a href="https://github.com/Srinivasareddy2108/Doctor-App-2-" target="_blank" rel="noreferrer" className="button">Code</a>
            </div>

            <div className="projects__card">
                <h3>Agri App</h3>
                <img src={IMG3} alt="Aave Landing Page" />
                <p>Spring Boot app for agriculture and entrepreneurship management facilitates resource allocation for farmers and entrepreneurs.</p>

                {/* <a href="https://aave.com/" target="_blank" className="button">Site</a>
                <a href="https://github.com/aave/aave-v3-core" target="_blank" className="button">Code</a> */}
            </div>
        </div>
    </section>
);
}

export default Projects
