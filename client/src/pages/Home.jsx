import React from "react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
import { bannerData } from "../components/constants/data";
import "react-multi-carousel/lib/styles.css";
import { useAuth } from "../store/auth";
import image1 from "../components/images/image1.png";
import image2 from "../components/images/image2.png";
import image3 from "../components/images/image3.png";
import image4 from "../components/images/image4.png";
import Service from "../components/Service";
import Poster from "../components/Poster";
import Review from "../components/Review";

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: 400,
  transition: "transform .5s ease",
  [theme.breakpoints.down("sm")]: {
    objectFit: "cover",
    height: 180,
  },
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

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

export default function Home() {
  const { products } = useAuth();
  return (
    <>
      <div>
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
          <Image src={image1} alt="banner" />
          <Image src={image2} alt="banner" />
          <Image src={image3} alt="banner" />
          <Image src={image4} alt="banner" />
        </Carousel>
      </div>

      <div>
        <Service />
      </div>

      <div>
        <section className="p-4 mt-5">
          <div className="text-center mb-4">
            <hr />
            <h2 className="text-5xl text-center m-4 font-semibold playfair-display-sc-regular">
              All Product Available Here
            </h2>
            <hr />
          </div>

          {/* CARD-1 */}
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products?.map((curElem, index) => {
              return (
                <Link to={`/product/${curElem._id}`}>
                  <div
                    key={index}
                    className="bg-gray-100 rounded-lg shadow-md p-4 h-100"
                    // style={{ height: "300px", width: "250px" }}
                  >
                    <div className="card-details">
                      <div className="product-image"></div>
                      {curElem.url && (
                        <img
                          src={curElem.url}
                          alt={curElem.product}
                          className="w-full h-60 mb-4 rounded-md"
                        />
                      )}
                      <div className="mb-4">
                        <p className="text-gray-600">{curElem.product}</p>
                        <p className="text-gray-800 font-semibold">
                          ₹ {curElem.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

      <div>
        <Poster />
      </div>

      <div>
        <Review />
      </div>
    </>
  );
}
