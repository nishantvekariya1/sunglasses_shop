import React from "react";
import { aboutImage } from "../components/constants/data";

export default function About() {
  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="font-semibold text-gray-800 mb-4 playfair-display-sc-regular text-5xl">
              About Our Sunspect Shop
            </h2>
          </div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div
              className="flex flex-col text-left mr-24"
              style={{ width: "500px" }}
            >
              <p className="text-gray-600 text-lg font-bold mb-2 yeseva-one-regular">
                Providing quality sunglasses since 1990
              </p>
              <hr />
              <br />
              <div className="text-gray-700 text-left josefin-sans">
                For over three decades, our sunspect shop has stood as a beacon
                of excellence in the realm of eyewear, serving a loyal clientele
                with unwavering dedication and an unyielding commitment to
                excellence. Since our inception in 1990, we have upheld a
                steadfast pledge to deliver sunglasses of unparalleled quality,
                meticulously crafted to exceed the expectations of our
                discerning customers. Our extensive selection boasts a myriad of
                styles, ranging from the timeless elegance of classic aviators
                to the cutting-edge allure of oversized frames, ensuring that
                every individual finds the ideal pair to complement their unique
                tastes and lifestyle. With a relentless focus on affordability
                and accessibility, we endeavor to make premium eyewear
                accessible to all, empowering our customers to embrace their
                individuality and step out in style, confident in the knowledge
                that they are adorned with nothing but the finest sunspectacles
                available.
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src={aboutImage[0].aurl}
                alt="About Us"
                className="rounded-lg shadow-md"
                style={{ height: "400px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
