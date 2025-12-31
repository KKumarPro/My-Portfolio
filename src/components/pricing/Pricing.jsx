import React from "react";
import "./Pricing.css";
import Image1 from "../../assets/price-1.svg";
import Image2 from "../../assets/price-2.svg";
import Image3 from "../../assets/price-3.svg";

const Pricing = () => {
  return (
    <section className="pricing container section">
      <h2 className="section__title">What I’m Looking For</h2>

      <div className="pricing__container grid">
        <div className="pricing__item">
          <img src={Image1} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Internship Opportunities</h3>
          <p className="pricing__title">
            Open to full-stack or backend-focused internships where I can work
            on real-world systems and learn from experienced engineers.
          </p>
          <p className="pricing__support">On-site / Remote</p>
          <a href="#contact" className="btn">Contact Me</a>
        </div>

        <div className="pricing__item best">
          <span className="badge">Preferred</span>
          <img src={Image2} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Junior Full-Stack Role</h3>
          <p className="pricing__title">
            Entry-level full-stack roles focused on React, Node.js, APIs, and
            scalable backend systems.
          </p>
          <p className="pricing__support">Growth-oriented teams</p>
          <a href="#contact" className="btn">Let’s Talk</a>
        </div>

        <div className="pricing__item">
          <img src={Image3} alt="" className="pricing__img" />
          <h3 className="pricing__plan">Project Collaboration</h3>
          <p className="pricing__title">
            Interested in collaborating on meaningful projects involving
            real-time systems, AI features, or backend architecture.
          </p>
          <p className="pricing__support">Flexible availability</p>
          <a href="#portfolio" className="btn">View Work</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
