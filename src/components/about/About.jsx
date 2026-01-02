import React from 'react';
import './About.css';
import Image from '../../assets/1karan.png';
import Resume from '../../assets/Karan_Kumar_Resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="Karan Kumar" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I’m Karan Kumar, a full-stack web developer with hands-on experience
              building production-style web applications during my internship at
              Central Coalfields Limited (CCL).
              <br /><br />
              I work primarily with React on the frontend and Node.js on the
              backend, focusing on building responsive UIs, integrating APIs,
              and developing real-time features using WebSockets. I’ve also
              worked with PostgreSQL and MongoDB to design reliable data flows
              for modern web systems.
              <br /><br />
              I have growing exposure to AI-driven features and Web3 concepts,
              and I’m actively strengthening my backend fundamentals, data
              structures, and system design skills to perform effectively in
              technical interviews and real-world development environments.
            </p><br></br>

            <ul className="about__list">
              <li>
                <strong>Frontend:</strong> React, JavaScript (ES6+), TypeScript,
                HTML5, Tailwind CSS
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, REST APIs,
                WebSockets, Spring Boot (basic)
              </li>
              <br></br>
            </ul>
            <ul className="about__list">
              <li>
                <strong>Databases:</strong> PostgreSQL, MongoDB
              </li>
              <li>
                <strong>AI & Web3:</strong> Google Gemini API, Prompt Engineering,
                Ethereum Smart Contracts
              </li>
            </ul>
            <a
              href={Resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
