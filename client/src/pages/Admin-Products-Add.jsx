import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function AdminProductsAdd() {
  const navigate = useNavigate();
  const [newProduct, setNewProduct] = useState({
    product: "",
    description: "",
    category: "",
    price: "",
    provider: "",
    url: "",
  });
  const { authorizationToken, API } = useAuth();

  const URL = `${API}/api/admin/products/addproduct`;

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(newProduct),
      });

      const res_data = await response.json();

      if (response.ok) {
        setNewProduct({
          product: "",
          description: "",
          category: "",
          price: "",
          provider: "",
          url: "",
        });
        alert("New Product added...");
        navigate("/admin/products");
      } else {
        alert("Error Occur during product addition");
      }
    } catch (error) {
      console.log(`Error : ${error}`);
    }
  };

  return (
    <>
      <div className="text-center mb-4">
        <hr />
        <h2 className="text-5xl text-center m-4 font-semibold playfair-display-sc-regular">
          Add New Product
        </h2>
        <hr />
      </div>

      <div className="flex justify-center">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <form
            className="bg-gray-100 border border-gray-600 shadow w-full rounded-lg divide-y divide-gray-200"
            onSubmit={handleSubmit}
          >
            <div className="px-5 py-7">
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
                name="product"
                placeholder="Product Name"
                id="product"
                required
                autoComplete="off"
                value={newProduct.product}
                onChange={handleInput}
              />

              <textarea
                className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full h-40"
                name="description"
                placeholder="Description"
                id="description"
                required
                value={newProduct.description}
                onChange={handleInput}
              />

              <div className="flex justify-between items-center mt-1 mb-4">
                <div>
                  <input
                    type="radio"
                    id="men"
                    name="category"
                    value="men"
                    checked={newProduct.category === "men"}
                    onChange={handleInput}
                  />
                  <label htmlFor="men" className="ml-2">
                    Men
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="women"
                    name="category"
                    value="women"
                    checked={newProduct.category === "women"}
                    onChange={handleInput}
                  />
                  <label htmlFor="women" className="ml-2">
                    Women
                  </label>
                </div>
              </div>

              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
                name="price"
                placeholder="Price"
                id="price"
                required
                autoComplete="off"
                value={newProduct.price}
                onChange={handleInput}
              />

              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
                name="provider"
                placeholder="Provider"
                id="provider"
                required
                autoComplete="off"
                value={newProduct.provider}
                onChange={handleInput}
              />

              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
                name="url"
                placeholder="URL"
                id="url"
                required
                autoComplete="off"
                value={newProduct.url}
                onChange={handleInput}
              />

              <button
                type="submit"
                className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                Add New Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
