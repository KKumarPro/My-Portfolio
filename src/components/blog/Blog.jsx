import React from 'react';
import './Blog.css';

import Image1 from '../../assets/blog-1.svg';

const Blog = () => {
  return (
    <section className="blog container section" id="blog">
      <h2 className="section__title">Technical Notes & Learnings</h2>

      <div className="blog__container grid">
        <div className="blog__card">
          <div className="blog__thumb">
            <span className="blog__category">Project Insight</span>
            <img src={Image1} alt="Real-time systems" className="blog__img" />
          </div>

          <div className="blog__details">
            <h3 className="blog__title">
              Building Real-Time Chat with WebSockets in React
            </h3>

            <div className="blog__meta">
              <span>From Glimmer Project</span>
              <span className="blog__dot">•</span>
              <span>WebSockets</span>
            </div>
          </div>
        </div>

        <div className="blog__card">
          <div className="blog__thumb">
            <span className="blog__category">AI Feature</span>
            <img src={Image1} alt="AI integration" className="blog__img" />
          </div>

          <div className="blog__details">
            <h3 className="blog__title">
              Integrating Google Gemini API for Context-Aware Responses
            </h3>

            <div className="blog__meta">
              <span>Hands-on Learning</span>
              <span className="blog__dot">•</span>
              <span>AI Integration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
