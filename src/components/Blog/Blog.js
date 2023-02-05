import React from "react";
import "./blog.css";
import blog1 from "./blogImages/blog1.png";
import blog2 from "./blogImages/blog2.png";
import blog3 from "./blogImages/blog3.png";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ArrowRight } from "react-bootstrap-icons";
import { SlCalender } from "react-icons/sl";

const blogData = [
  {
    image: blog1,
    title: "More productive with an atmosphere of greenery",
    description:
      "An atmosphere of greenery can increase productivity in the workplace. Studies show that plants improve air quality and decrease stress...",
    date: "January 20, 2023",
  },
  {
    image: blog2,
    title: "The benefits of plants in your room",
    description:
      "Plants in your room can bring numerous benefits, such as improved air quality, reduced stress, and increased feelings of well-being....",
    date: "January 10, 2023",
  },
  {
    image: blog3,
    title: "Hobbyist plants in the house",
    description:
      "Having hobbyist plants in the house is a great way to bring nature indoors. Not only do they purify the air, but they....",
    date: "January 15, 2023",
  },
];

const Blog = () => {
  return (
    <div className="blog-wrapper">
      <div className="blog-header">Interesting blog to read</div>
      <div className="blog">
        {blogData.map((b) => (
          <Card style={{ width: "25rem", border: "none", margin: "2rem",height:"42rem" }}>
            <Card.Img variant="top" src={b.image} />
            <Card.Body>
              <Card.Title
                style={{
                  fontFamily: "Lato",
                  fontWeight: "700",
                  fontSize: "1.35rem",
                  lineHeight: "140%",
                  /* or 28px */
                  color: "#285A43",
                }}
              >
                {b.title}
              </Card.Title>

              <Card.Text
                style={{
                  fontFamily: "Raleway",
                  fontWeight: "500",
                  fontSize: "1.1rem",
                  lineHeight: "150%",
                  /* or 28px */
                  color: "#121212",
                  opacity: "0.95",
                }}
              >
                {b.description}
              </Card.Text>
            </Card.Body>
            <Card.Body
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <ListGroup.Item
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Raleway",
                  fontWeight: "500",
                  fontSize: "1.2rem",
                  lineHeight: "150%",
                  /* identical to box height, or 24px */
                  color: "rgba(18, 18, 18, 0.8)",
                  opacity: "0.90",
                }}
              >
                <SlCalender
                  style={{ marginRight: "0.35rem", opacity: "0.70" }}
                />
                {b.date}
              </ListGroup.Item>
              <Card.Link
                style={{
                  fontFamily: "Lato",
                  fontWeight: "700",
                  fontSize: "1.25rem",
                  lineHeight: "140%",
                  /* or 28px */
                  color: "#285A43",
                  textDecoration: "none",
                }}
              >
                Read More <ArrowRight />
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
