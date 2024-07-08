import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black mt-10">
      <div className="container mx-auto px-8 py-12 flex flex-wrap justify-between">
        <div className="footer-left w-full md:w-1/2 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-4">
            Sun<span className="text-black">Spects</span>
          </h3>
          <p className="text-sm mb-4">
            Since 1990, our sunspect shop has been dedicated to offering
            top-quality sunglasses at affordable prices. With a diverse
            selection ranging from classic aviators to trendy oversized frames,
            we cater to every style and preference.
          </p>
          <p className="text-sm">SunSpects © 1990</p>
        </div>

        <div className="footer-center w-full md:w-1/2 lg:w-1/4">
          <div className="mb-4">
            <i className="fa fa-map-marker mr-2 fa-xl"></i>
            <p className="text-sm">
              <span className="font-semibold">PDEU Raysan, Gadnhinagar</span>
            </p>
          </div>
          <div className="mb-4">
            <i className="fa fa-phone mr-2 fa-xl"></i>
            <p className="text-sm font-semibold">+91 1234567890</p>
          </div>
          <div>
            <i className="fa fa-envelope mr-2 fa-xl"></i>
            <p className="text-sm">
              <a href="mailto:sunspects@gmail.com" className="font-semibold">
                sunspects@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="footer-right w-full md:w-1/2 lg:w-1/4">
          <p className="text-sm mb-4">
            For over three decades, our sunspect emporium has been a beacon of
            quality and affordability. From timeless aviators to chic oversized
            frames, our diverse collection ensures everyone discovers their
            ideal pair.
          </p>
          <div className="footer-icons">
            <a href="#" className="mr-4">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" className="mr-4">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" className="mr-4">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 h-14 flex justify-center items-center">
        <div>Made with ❤️ by SunSpects ©️ 2024</div>
      </div>
    </footer>
  );
};

export default Footer;
