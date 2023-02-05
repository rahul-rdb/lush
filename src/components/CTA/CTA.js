import React from "react";
import "./cta.css";

const CTA = () => {
  return (
    <div className="ctaWrapper">
      <div className="cta-text">
        Enter your email address for our mailing Promo or other interesting
        things
      </div>
      <div>
        <input
          className="email-input"
          size="lg"
          type="email"
          placeholder="Enter Your Email"
        />
        <button className="email-button">Submit</button>
      </div>
    </div>
  );
};

export default CTA;
