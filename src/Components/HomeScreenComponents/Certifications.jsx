/*
This is the component for the certificate section of my website 
*/

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { certifications } from "../../Constants";

// Responsive Carousel
const responsiveCarousel = {
  /* 
  The Carousel component takes in a responsive object, which is an object that contains properties for different screen sizes.
  The properties for different screen sizes are:
   */
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Certifications = () => (
  <div
    style={{
      background: "linear-gradient(to right, rgb(69,67,100), rgb(255,204,153))",
      padding: "50px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <h2
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        color: "#fff",
        marginBottom: "30px",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
      }}
    >
      Certifications
    </h2>
    <div style={{ width: "80%" }}>
      <Carousel
        responsive={responsiveCarousel}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {certifications.map((certification, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              padding: "20px",
              margin: "0 10px",
              textAlign: "center",
              transition: "transform 0.3s",
            }}
            className="hover:transform hover:scale-105"
          >
            <img
              src={certification.image}
              alt={certification.title}
              style={{
                maxWidth: "500px",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "5px",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              <p style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                {certification.title}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default Certifications;
