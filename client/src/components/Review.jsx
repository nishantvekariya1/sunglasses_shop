import React from "react";
import Carousel from "react-multi-carousel";
import { reviewData } from "./constants/data";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Review() {
  return (
    <div className="mb-15 flex justify-center items-center mt-4">
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        slidesToSlide={1}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {reviewData.map((data, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
            style={{ height: "100%" }}
          >
            <div
              className="flex flex-col justify-center items-center gap-3"
              style={{
                width: "40vw",
                textAlign: "center",
                borderRadius: "10px", // Rounded corners
                // overflow: "hidden", // Clip image to rounded shape
              }}
            >
              <img
                src={data.phtourl} // Assuming each data object has a 'phtourl' property for image URL
                alt={data.author}
                style={{
                  width: "20%", // Ensure image takes full width of container
                  height: "50", // Maintain aspect ratio
                  borderRadius: "50%", // Rounded corners
                }}
              />
              <p>{data.author}</p>
              <p>{data.text}</p>
              <p>{data.rating}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
