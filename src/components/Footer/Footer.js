import React from "react";
import "./footer.css";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer">
        <div className="footer-head">Feel free to contact us</div>
        <div className="footer-icons">
          <FiInstagram className="icon" />
          <FiFacebook className="icon" />
          <FiTwitter className="icon" />
        </div>
        <div className="footer-nav">
          <span>Home</span>
          <span>About Us</span>
          <span>Plants</span>
          <span>Delivery</span>
          <span>Blog</span>
          <span>Contact Us</span>
        </div>
      </div>
      <div className="copyright">
        Copyright © 2021 Lush. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
