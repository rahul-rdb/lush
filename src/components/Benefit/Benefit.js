import React from "react";
import "./benefit.css";
import benefit1 from "./benefitImages/benefit1.png";
import benefit2 from "./benefitImages/benefit2.png";
import benefit3 from "./benefitImages/benefit3.png";
import benefit4 from "./benefitImages/benefit4.png";
import benefit5 from "./benefitImages/benefit5.png";

const benefitData = [
  {
    title: "Quality Product",
    subtitle:
      "Our flowers are of the highest quality, carefully selected and sourced from reputable",
    image: benefit2,
  },
  {
    title: "Always Fresh",
    subtitle:
      "Our flowers are always fresh, handpicked and delivered promptly for maximum longevity and enjoyment.",
    image: benefit3,
  },
  {
    title: "Work Smart",
    subtitle:
      "We work smart, using innovative techniques and technology to streamline our processes",
    image: benefit4,
  },
  {
    title: "Excelent Service",
    subtitle:
      "We pride ourselves on providing excellent service, going above and beyond to meet our customers' needs",
    image: benefit5,
  },
];

const Benefit = () => {
  return (
    <div className="benefit-wrapper">
      <div className="benefit-grid">
        <div
          className="benefit-image"
          style={{ backgroundImage: `url(${benefit1})` }}
        ></div>
        {benefitData.map((b) => (
          <div className="card-white">
            <div className="card-img">
              <img src={b.image} alt="plant" />
            </div>
            <div className="card-white-title">{b.title}</div>
            <div className="card-subtitle">{b.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefit;
