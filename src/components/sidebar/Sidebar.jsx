import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/1logo.png";
import LightLogo from "../../assets/1logo.png";

import {
  RiHome2Line,
  RiUser3Line,
  RiToolsLine,
  RiBriefcase2Line,
  RiStackLine,
  RiDraftLine,
  RiChat3Line,
  RiMoonLine,
  RiSunLine,
  RiMenu2Line,
} from "react-icons/ri";

const Sidebar = ({ theme, switchTheme }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <aside className={toggle ? "aside show-menu" : "aside"}>
        <a href="#home" className="nav__logo" onClick={() => setToggle(false)}>
          <img
            src={theme === "light" ? LightLogo : Logo}
            alt="Karan Kumar Logo"
          />
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link" onClick={() => setToggle(false)}>
                  <RiHome2Line />
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link" onClick={() => setToggle(false)}>
                  <RiUser3Line />
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link" onClick={() => setToggle(false)}>
                  <RiToolsLine />
                </a>
              </li>

              <li className="nav__item">
                <a href="#resume" className="nav__link" onClick={() => setToggle(false)}>
                  <RiBriefcase2Line />
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link" onClick={() => setToggle(false)}>
                  <RiStackLine />
                </a>
              </li>

              <li className="nav__item">
                <a href="#blog" className="nav__link" onClick={() => setToggle(false)}>
                  <RiDraftLine />
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link" onClick={() => setToggle(false)}>
                  <RiChat3Line />
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <button
            onClick={switchTheme}
            className="nav__link footer__button"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <RiMoonLine /> : <RiSunLine />}
          </button>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => setToggle(!toggle)}
      >
        <RiMenu2Line />
      </div>
    </>
  );
};

export default Sidebar;
