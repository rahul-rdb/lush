import React from "react";
import "./product.css";
// import plant2 from "../../images/plant2.jpg";
// import plant from "../../images/plant.jpg";
import Card from "react-bootstrap/Card";

const Product = () => {
  const ProductData = [
    {
      name: "Cactus Plant",
      price: "20",
      currentPrice: "12",
    },
    {
      name: "Money Plant",
      price: "18",
      currentPrice: "15",
    },
    {
      name: "Tulsi Plant",
      price: "15",
      currentPrice: "13",
    },
    {
      name: "Jasmine Plant",
      price: "15",
      currentPrice: "10",
    },
    {
      name: "Rose Plant",
      price: "15",
      currentPrice: "10",
    },
    {
      name: "Lavender Plant",
      price: "14",
      currentPrice: "10",
    },
    {
      name: "Bonsai Plant",
      price: "45",
      currentPrice: "35",
    },
    {
      name: "Lily Plant",
      price: "14",
      currentPrice: "8",
    },
  ];

  return (
    <>
      <div className="productWrapper">
        <div className="product-head">What we offer to you</div>
        <div className="product">
          {ProductData.map((product) => (
            <div>
              <Card
                style={{
                  width: "22rem",
                  background: "#ffffff",
                  border: "1px solid rgba(0, 0, 0, 0.03)",
                  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.02)",
                  borderRadius: "10px",
                  margin: "0.75rem 0.8rem",
                }}
              >
                <Card.Img
                  variant="top"
                  src="https://images.herzindagi.info/image/2021/Dec/spider-plant-benefits-for-health_g.jpg"
                  alt="plant"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <Card.Body>
                  <div className="product-footer">
                    <div>
                      <Card.Title
                        style={{
                          fontFamily: "Lato",
                          fontWeight: "900",
                          fontSize: "1.4rem",
                          lineHeight: "140%",
                          /* or 22px */
                          textTransform: "capitalize",
                          color: "#337a5b",
                        }}
                      >
                        {product.name}
                      </Card.Title>
                      <Card.Text>
                        <span className="og-price">(${product.price})</span>{" "}
                        &nbsp;
                        <span className="price">${product.currentPrice}</span>
                      </Card.Text>
                    </div>
                    <div>
                      <button className="buy-button" variant="primary">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
