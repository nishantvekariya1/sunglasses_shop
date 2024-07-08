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

      // console.log(response);
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
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="product">Product</label>
            <input
              type="text"
              name="product"
              placeholder="Product"
              id="product"
              required
              autoComplete="off"
              value={newProduct.product}
              onChange={handleInput}
            />
            <br />
            <br />

            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              placeholder="Description"
              id="description"
              required
              value={newProduct.description}
              onChange={handleInput}
            ></textarea>
            <br />
            <br />

            <label htmlFor="category">Category</label>
            <div>
              <input
                type="radio"
                id="men"
                name="category"
                value="men"
                checked={newProduct.category === "men"}
                onChange={handleInput}
              />
              <label htmlFor="men">Men</label>

              <input
                type="radio"
                id="women"
                name="category"
                value="women"
                checked={newProduct.category === "women"}
                onChange={handleInput}
              />
              <label htmlFor="women">Women</label>
            </div>

            <br />
            <br />

            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              id="price"
              required
              autoComplete="off"
              value={newProduct.price}
              onChange={handleInput}
            />
            <br />
            <br />

            <label htmlFor="provider">Provider</label>
            <input
              type="text"
              name="provider"
              placeholder="Provider"
              id="provider"
              required
              autoComplete="off"
              value={newProduct.provider}
              onChange={handleInput}
            />
            <br />
            <br />

            <label htmlFor="url">URL</label>
            <input
              type="text"
              name="url"
              placeholder="URL"
              id="url"
              required
              autoComplete="off"
              value={newProduct.url}
              onChange={handleInput}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-submit">
              Add New Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
