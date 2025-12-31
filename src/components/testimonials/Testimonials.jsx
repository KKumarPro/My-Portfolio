import React from 'react';
import './Testimonials.css';
import Image3 from '../../assets/avatar-3.svg';
import Image4 from '../../assets/avatar-4.svg';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const data = [
    {
      id: 1,
      image: Image4,
      title: "Internship Feedback",
      subtitle: "Technical Mentor (CCL)",
      comment:
        "Karan demonstrated strong problem-solving skills and adaptability while working on full-stack features. He understood requirements quickly and collaborated effectively with the team.",
    },
    {
      id: 2,
      image: Image3,
      title: "Peer Collaboration",
      subtitle: "University Project Team",
      comment:
        "Karan was proactive in helping teammates, explaining concepts clearly, and supporting debugging efforts during development.",
    },
    {
      id: 3,
      image: Image4,
      title: "Freelance Collaboration",
      subtitle: "Client Feedback",
      comment:
        "Clear communication, timely delivery, and iterative improvements based on feedback made working with Karan smooth and reliable.",
    },
  ];

  return (
    <section className="testimonials container section">
      <h2 className="section__title">What It’s Like Working With Me</h2>

      <Swiper
        className="testimonial__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => (
          <SwiperSlide className="testimonial__item" key={id}>
            <div className="thumb">
              <img src={image} alt="Avatar" />
            </div>

            <h3 className="testimonial__title">{title}</h3>
            <span className="subtitle">{subtitle}</span>
            <div className="comment">{comment}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
