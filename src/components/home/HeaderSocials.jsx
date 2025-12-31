import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://github.com/KKumarPro"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/karan-kumar-305925282/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default HeaderSocials;
