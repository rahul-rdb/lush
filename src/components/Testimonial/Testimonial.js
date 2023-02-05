import React from "react";
import "./testimonial.css";
import Card from "react-bootstrap/Card";
import profile1 from "./profileImages/profile1.png";
import profile2 from "./profileImages/profile2.png";
import profile3 from "./profileImages/profile3.png";

const testData = [
  {
    image: profile1,
    name: "Jessica Watson",
    comment:
      "“Highly recommend this website for quality flowers and plants. Great prices, timely delivery and excellent customer service.”",
  },
  {
    image: profile2,
    name: "Kate Szu",
    comment:
      "“Great service, beautiful flowers, timely delivery. Highly recommend.”",
  },
  {
    image: profile3,
    name: "Grace",
    comment:
      "“I am very happy with my purchase from this website, the plants were healthy and arrived on time.”",
  },
];

const Testimonial = () => {
  return (
    <div className="center-col test-wrapper">
      <div className="blog-header">What do they say about us</div>
      <div className="test">
        {testData.map((t) => (
          <Card
            style={{
              width: "25rem",
              height: "27rem",
              background: "#F8F8F8",
              padding: "3rem",
              margin: "3rem 0rem",
              border: "none",
            }}
          >
            <div className="center-col">
              <div className="name-wrapper">
                <Card.Img
                  src={t.image}
                  style={{
                    width: "5rem",
                    borderRadius: "50%",
                    marginRight: "2rem",
                  }}
                />
                <Card.Title
                  style={{
                    fontFamily: "Lato",
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    lineHeight: "140%",
                    /* or 28px */
                    color: "#285A43",
                  }}
                >
                  {t.name}
                </Card.Title>
              </div>
              <Card.Body>
                <Card.Text
                  style={{
                    fontFamily: "Raleway",
                    fontWeight: "500",
                    fontSize: "1.35rem",
                    lineHeight: "150%",
                    /* or 28px */
                    color: "#121212",
                    opacity: "0.9",
                  }}
                >
                  {t.comment}
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
