import React from "react";
import "./about.css";
import indoorPlant from "../../images/Indoor_Plant.png";
import outdoorPlant from "../../images/Outdoor_Plant.png";
import PlantsPot from "../../images/Plants_Pot.png";

const About = () => {
  return (
    <div className="about-wrapper center-col" id="about">
      <div className="about center-col">
        <div className="center">
          <div className="about-header">
            We Help choose the most suitable plants for you
          </div>
          <div className="about-subheader">
            Our selection includes a wide variety of flowers, from classic roses
            to exotic orchids, as well as a variety of lush indoor and outdoor
            plants and also offer unique floral arrangements that are perfect
            for any occasion, whether you're looking to brighten up your home or
            send a thoughtful gift.{" "}
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card-white">
            <div className="card-img">
              <img src={indoorPlant} alt="plant" />
            </div>
            <div className="card-white-title">Indoor Plants</div>
            <div className="card-subtitle">
              Bring the beauty of nature to your outdoor spaces with our wide
              selection of outdoor plants
            </div>
          </div>
          <div className="card-green">
            <div className="card-img">
              <img src={outdoorPlant} alt="outdoorPlant" />
            </div>
            <div className="card-green-title">Outdoor Plants</div>
            <div className="card-green-subtitle">
              Bring a touch of greenery to your living spaces with our
              collection of indoor plants, perfect for purifying the air and
              adding a natural touch to your home.
            </div>
          </div>
          <div className="card-white">
            <div className="card-img">
              <img src={PlantsPot} alt="PlantsPot" />
            </div>
            <div className="card-white-title">Plants Pots</div>
            <div className="card-subtitle">
              Add a touch of style to your indoor or outdoor spaces with our
              collection of pots plants, available in a variety of sizes and
              designs to fit any decor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
