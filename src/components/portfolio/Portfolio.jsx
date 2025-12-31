import React, { useState } from "react";
import "./Portfolio.css";

import Menu from "./Menu";
import { RiGithubLine, RiLink } from "react-icons/ri";
import { motion } from "framer-motion";

const FILTERS = [
  { id: 0, label: "All", value: "All" },
  { id: 1, label: "Full Stack", value: "Full Stack" },
  { id: 2, label: "Backend", value: "Backend" },
  { id: 3, label: "AI", value: "AI" },
  { id: 4, label: "Web3", value: "Web3" },
];

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const [activeFilter, setActiveFilter] = useState(0);

  const filterItems = (filter) => {
    if (filter === "All") {
      setItems(Menu);
    } else {
      const updatedItems = Menu.filter((item) =>
        item.category.includes(filter)
      );
      setItems(updatedItems);
    }
  };

  return (
    <section className="portfolio container section" id="portfolio">
      <h2 className="section__title">Projects</h2>

      <div className="portfolio__filters">
        {FILTERS.map((filter) => (
          <span
            key={filter.id}
            className={
              activeFilter === filter.id
                ? "portfolio__item portfolio__item-active"
                : "portfolio__item"
            }
            onClick={() => {
              filterItems(filter.value);
              setActiveFilter(filter.id);
            }}
          >
            {filter.label}
          </span>
        ))}
      </div>

      <div className="portfolio__container grid">
        {items.map(
          ({ id, image, title, category, url, repositoryUrl, description, featured }) => (
            <motion.div
              layout
              key={id}
              className={`portfolio__card ${featured ? "portfolio__featured" : ""}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            > 
              <div className="portfolio__thumbnail">
                  {featured && (
                    <span className="portfolio__badge">Featured</span>
                  )}

                  <img
                    src={image}
                    alt={title}
                    className="portfolio__img"
                  />
                  <div className="portfolio__mask"></div>
                </div>

              <span className="portfolio__category">
                {category.join(" • ")}
              </span>

              <h3 className="portfolio__title">{title}</h3>

              <p className="portfolio__description">
                {description}
              </p>

              <div className="portfolio__actions">
                {url && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="portfolio__button"
                    aria-label="Live project"
                  >
                    <RiLink />
                  </a>
                )}

                <a
                  href={repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="portfolio__github-button"
                  aria-label="GitHub repository"
                >
                  <RiGithubLine />
                </a>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
