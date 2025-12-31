import React from 'react';
import {
  RiBriefcaseLine,
  RiGitRepositoryLine,
  RiRocketLine,
  RiCodeLine,
} from 'react-icons/ri';

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <RiBriefcaseLine className="about__icon" />
        <div>
          <h3 className="about__title">1</h3>
          <span className="about__subtitle">Internship Experience</span>
        </div>
      </div>

      <div className="about__box">
        <RiGitRepositoryLine className="about__icon" />
        <div>
          <h3 className="about__title">30+</h3>
          <span className="about__subtitle">GitHub Repositories</span>
        </div>
      </div>

      <div className="about__box">
        <RiRocketLine className="about__icon" />
        <div>
          <h3 className="about__title">3</h3>
          <span className="about__subtitle">Major Projects Built</span>
        </div>
      </div>

      <div className="about__box">
        <RiCodeLine className="about__icon" />
        <div>
          <h3 className="about__title">5+</h3>
          <span className="about__subtitle">Core Technologies Used</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
