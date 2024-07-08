import React from "react";
import { useCart, useDispatchCart } from "./contextReducer";
import { useAuth } from "../../store/auth";

export default function Cart() {
  const { API, user } = useAuth();
  const data = useCart();
  const dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div className="m-5 w-full text-center text-3xl text-black">
        The Cart is Empty!
      </div>
    );
  }

  const handleCheckOut = async () => {
    const userEmail = user.email;

    try {
      const response = await fetch(`${API}/api/order/ordersdata`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString(),
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      dispatch({ type: "DROP" }); // If the request was successful, clear the cart
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const totalPrice = data.reduce((total, product) => total + product.price, 0);

  return (
    <div className="relative overflow-x-auto text-center flex flex-col items-center justify-center">
      <table
        className="text-sm text-center text-gray-500 dark:text-gray-400"
        style={{ width: "80vw" }}
      >
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((product, index) => (
            <tr
              className=" border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {product.product}
              </th>
              <td className="px-6 py-4">{product.qty}</td>
              <td className="px-6 py-4">{product.price}</td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="text-white rounded px-4 py-2"
                  onClick={() => dispatch({ type: "REMOVE", index })}
                >
                  <i
                    class="fa-solid fa-trash-can fa-2xl"
                    style={{ color: "#ff0000" }}
                  ></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4">
        <h1 className="text-2xl">Total Price: ${totalPrice}</h1>
        <button
          type="button"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCheckOut}
        >
          Check Out
        </button>
      </div>
    </div>
  );
}
