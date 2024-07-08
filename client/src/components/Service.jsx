import React from "react";
import "../styles/service.css";

export default function Service() {
  return (
    <div className="carousel-container p-4 bg-gray-100 mt-5">
      <h2 className="text-5xl text-center mb-4 font-semibold playfair-display-sc-regular">
        Why Shop With Us
      </h2>
      <div className="flex justify-center mb-4">
        <div className="bg-white p-4 rounded shadow mr-4">
          <div className="mb-3 text-blue-500">
            <i class="fa-solid fa-truck fa-2xl"></i>
          </div>
          <h3 className="text-3xl font-semibold mb-2 yeseva-one-regular">
            Fast Delivery
          </h3>
          <p className="text-gray-700 josefin-sans">
            Step into style with our Sunglasses Shop, where fast delivery
            ensures you're always ahead of the trend
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow mr-4">
          <div className="mb-3 text-blue-500">
            <i class="fa-solid fa-truck-ramp-box fa-2xl"></i>
          </div>
          <h3 className="text-3xl font-semibold mb-2 yeseva-one-regular">
            Free Shipping
          </h3>
          <p className="text-gray-700 josefin-sans">
            Enjoy the sunshine without delay - we offer lightning-fast delivery
            straight to your doorstep
          </p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <div className="mb-3 text-blue-500">
            <i class="fa-solid fa-star fa-2xl"></i>
          </div>
          <h3 className="text-3xl font-semibold mb-2 yeseva-one-regular">
            Best Quality
          </h3>
          <p className="text-gray-700 josefin-sans">
            Quality meets convenience with our Sunglasses Shop, where free
            shipping makes every purchase a breeze
          </p>
        </div>
      </div>
    </div>
  );
}
