import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getAllProductData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/products`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setProducts(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/products/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      //   console.log(data);
      if (response.ok) {
        getAllProductData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProductData();
  }, []);
  return (
    <>
      <section className="admin-users-section">
        <div className="text-center mb-4">
          <hr />
          <h2 className="text-5xl text-center m-4 font-semibold playfair-display-sc-regular">
            Admin Products Data
          </h2>
          <hr />
        </div>
        <div>
          <div className="flex flex-col items-center justify-center my-10">
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-center text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Product
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Description
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Category
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Price
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Provider
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Image
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Image Link
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Update
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index} className="bg-white border-b">
                      <td className="py-4 px-6">{product.product}</td>
                      <td className="py-4 px-6">{product.description}</td>
                      <td className="py-4 px-6">{product.category}</td>
                      <td className="py-4 px-6">{product.price}</td>
                      <td className="py-4 px-6">{product.provider}</td>
                      <td className="py-4 px-6">
                        <img
                          src={product.url}
                          alt={product.product}
                          className="w-10 h-10 rounded-full mx-auto"
                        />
                      </td>
                      <td className="py-4 px-6">{product.url}</td>
                      <td className="py-4 px-6">
                        <Link
                          to={`/admin/products/${product._id}/edit`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </Link>
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => deleteProduct(product._id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <i class="fa-solid fa-trash-can fa-2xl"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button>
          <Link to={`/admin/products/addproduct`}>
            <div className="bg-blue-600 text-white py-2 px-4 border border-black-500 rounded transition-colors duration-300 w-80">
              Add New Product
            </div>
          </Link>
        </button>
      </section>
    </>
  );
}
