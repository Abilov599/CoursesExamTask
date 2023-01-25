import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";

const Header = () => {
  return (
    <header>
      <section id="header-top">
        <div className="container">
          <div className="site-logo">
            <div className="site-img">
              <img
                src="https://preview.colorlib.com/theme/course/images/logo.png"
                alt=""
              />
            </div>
            <h1>Courses</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/add-course">Add Course</NavLink>
              </li>
              <li>
                <NavLink to="/">About</NavLink>
              </li>
              <li>
                <NavLink to="/">Courses</NavLink>
              </li>
              <li>
                <NavLink to="/">Elements</NavLink>
              </li>
              <li>
                <NavLink to="/">News</NavLink>
              </li>
              <li>
                <NavLink to="/">Contact</NavLink>
              </li>
            </ul>
          </nav>
          <div className="contact">
            <div>
              <div className="contact-image">
                <img
                  src="https://preview.colorlib.com/theme/course/images/phone-call.svg"
                  alt=""
                />
              </div>
              <h2>+43 4566 7788 2457</h2>
            </div>
          </div>
        </div>
      </section>

    </header>
  );
};

export default Header;
