import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg';
import Image2 from '../../assets/service-2.svg';
import Image3 from '../../assets/service-3.svg';

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Full-Stack Web Applications',
    description:
      'Building end-to-end web applications using React, Node.js, and PostgreSQL, with a focus on clean architecture, performance, and real-world usability.',
  },
  {
    id: 2,
    image: Image2,
    title: 'Real-Time & Interactive Systems',
    description:
      'Developing real-time features such as live chat, notifications, and interactive experiences using WebSockets and modern frontend patterns.',
  },
  {
    id: 3,
    image: Image3,
    title: 'AI-Assisted Web Features',
    description:
      'Integrating AI-driven functionality using Google Gemini API to enhance user interaction, automate responses, and support intelligent workflows.',
  },
];

const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">What I Build</h2>

      <div className="services__container grid">
        {data.map(({ id, image, title, description }) => (
          <div className="services__card" key={id}>
            <img
              src={image}
              alt={title}
              className="services__img"
              width="80"
            />

            <h3 className="services__title">{title}</h3>
            <p className="services__description">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
