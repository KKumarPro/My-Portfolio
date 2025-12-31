import React from 'react';
import './Home.css';
import Me from '../../assets/karan.png'; // real photo
import HeaderSocials from './HeaderSocials';
//import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img
          src={Me}
          alt="Karan Kumar"
          className="home__img"
          width="140"
        />

        <h1 className="home__name">Karan Kumar</h1>

        <span className="home__education">
          Full-Stack Web Developer
        </span>

        <p className="home__description">
          I build scalable, production-ready web applications using React,
          Node.js, and modern UI systems.
        </p>

        <HeaderSocials />

        <a href="#contact" className="btn"> Contact Me</a><br></br>

        
      </div>

      <Shapes />
    </section>
  );
};

export default Home;