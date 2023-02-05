import React from "react";
import "./hero.css";
import navlogo from "../../images/navlogo.png";
import play from "../../images/play.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero-wrapper" id="home">
      <div className="navbar">
        <div className="nav-wrapper">
          <div>
            <img className="logo" src={navlogo} alt="lush" />
          </div>
          <div className="link-wrapper">
            <Link
              className="a"
              to="home"
              spy={true}
              smooth={true}
              duration={400}
            >
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "activeNavlink" : "navLink"}`
                }
                to={"/"}
              >
                Home
              </NavLink>
            </Link>
            <Link
              className="a"
              to="about"
              spy={true}
              smooth={true}
              duration={400}
            >
              <NavLink
                className={({ isActive }) =>
                  `${isActive ? "activeNavlink" : "navLink"}`
                }
                to={"/aboutus"}
              >
                About Us
              </NavLink>
            </Link>
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "activeNavlink" : "navLink"}`
              }
              to={"/planters"}
            >
              Planters
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${isActive ? "activeNavlink" : "navLink"}`
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
            <button className="call-button">Call Us</button>
          </div>
        </div>
      </div>
      <div className="center-col">
        <div className="header">Nature's Beauty Delivered to You</div>
        <div className="sub-header">
          Nature's beauty is just a click away with our online flower and plant
          shop. We offer a wide variety of flowers that will bring a touch of
          nature to your home!
        </div>
        <div className="center">
          <button className="book-button">Book Now</button>
          <button className="watch-button center">
            <img className="play-icon" src={play} alt="play" />
            <div>Watch Video</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
