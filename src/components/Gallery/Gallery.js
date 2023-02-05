import React from "react";
import "./gallery.css";
import gallery1 from "./galleryImages/gallery1.png";
import gallery2 from "./galleryImages/gallery2.png";
import gallery3 from "./galleryImages/gallery3.png";
import gallery4 from "./galleryImages/gallery4.png";
import gallery5 from "./galleryImages/gallery5.png";

const Gallery = () => {
  return (
    <div className="gallery-wrapper center-col">
      <div className="gallery-title">Our Gallery View</div>
      <div className="gallery-grid">
        <div
          className="long-grid griddiv"
          style={{ backgroundImage: `url(${gallery1})` }}
        ></div>
        <div
          className="griddiv"
          style={{ backgroundImage: `url(${gallery2})` }}
        ></div>
        <div
          className="griddiv"
          style={{ backgroundImage: `url(${gallery3})` }}
        ></div>
        <div
          className="griddiv"
          style={{ backgroundImage: `url(${gallery4})` }}
        ></div>
        <div
          className="griddiv"
          style={{ backgroundImage: `url(${gallery5})` }}
        ></div>
      </div>
    </div>
  );
};

export default Gallery;
