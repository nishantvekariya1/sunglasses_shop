import React from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export default function WomenProduct() {
  const { womenproducts } = useAuth();
  console.log("women products : ", womenproducts);
  return (
    <>
      <section className="p-4">
        <div className="text-center mb-4">
          <hr />
          <h2 className="text-5xl text-center m-4 font-semibold playfair-display-sc-regular">
            Women's Products
          </h2>
          <hr />
        </div>

        {/* CARD-1 */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {womenproducts?.map((curElem, index) => {
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
                        {curElem.price}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
