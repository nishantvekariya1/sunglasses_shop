import React from "react";
import poster from "./images/poster.png";

export default function Poster() {
  return (
    <div className="carousel-container p-1 mt-5 ">
      <img
        src={poster}
        alt="poster-image"
        style={{ height: "500px", width: "100%" }}
      />
    </div>
  );
}
