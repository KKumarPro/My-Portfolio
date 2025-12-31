import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";

import "./Contact.css";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      return toast.error("Please fill in all fields.");
    }

    setLoading(true);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_API
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let’s connect</h3>
          <p className="contact__details">
            Have an opportunity, question, or collaboration in mind?  
            Feel free to reach out — I’ll get back to you.
          </p>
        </div>

        <form onSubmit={submitHandler} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        <ToastContainer position="bottom-right" theme={theme} />
      </div>
    </section>
  );
};

export default Contact;
