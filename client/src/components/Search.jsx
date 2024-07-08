import React, { useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import "../styles/search.css";
export default function Search() {
  const { products } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term if products is defined
  const filteredProducts = products
    ? products.filter((oneproduct) =>
        oneproduct.product.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  // Handle input change
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
      {searchTerm && ( // Only display the list if search term is not empty
        <ul className="search-results">
          {filteredProducts.map((oneproduct) => (
            <Link to={`/product/${oneproduct._id}`} key={oneproduct._id}>
              <li>{oneproduct.product}</li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
}
