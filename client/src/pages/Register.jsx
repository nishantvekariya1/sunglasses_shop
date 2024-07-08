import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { signupImage } from "../components/constants/data";
import { toast } from "react-toastify";

export default function Register() {
  const navigate = useNavigate();
  const { storeTokenInLS, API } = useAuth();
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const URL = `${API}/api/auth/register`;

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
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
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();

      if (response.ok) {
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        storeTokenInLS(res_data.token);
        toast.success("Registration Completed...");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log(`Registration Error: ${error}`);
    }
  };

  return (
    <>
      <div className="text-center mb-4">
        <hr />
        <h2 className="text-5xl text-center m-4 font-semibold playfair-display-sc-regular">
          Sign Up
        </h2>
        <hr />
      </div>
      <div className="flex justify-center">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md flex justify-center items-center">
          <form
            className="bg-gray-100 border border-gray-600 shadow w-full rounded-lg divide-y divide-gray-200"
            onSubmit={handleSubmit}
          >
            <div className="px-5 py-7">
              <label className="font-semibold text-sm pb-1 block text-accent-content"></label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
                name="username"
                placeholder="Username"
                id="username"
                required
                autoComplete="off"
                value={user.username}
                onChange={handleInput}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content"></label>
              <input
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
                name="email"
                placeholder="Email"
                id="email"
                required
                autoComplete="off"
                value={user.email}
                onChange={handleInput}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content"></label>
              <input
                type="number"
                className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
                name="phone"
                placeholder="Phone"
                id="phone"
                required
                autoComplete="off"
                value={user.phone}
                onChange={handleInput}
              />
              <label className="font-semibold text-sm pb-1 block text-accent-content"></label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
                name="password"
                placeholder="Password"
                id="password"
                required
                autoComplete="off"
                value={user.password}
                onChange={handleInput}
              />
              <button
                type="submit"
                className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block mt-7"
              >
                <span className="inline-block mr-2">Register</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>

        <div className="register-image">
          <img
            src={signupImage[0].suurl}
            alt="register"
            style={{ height: "500px" }}
          />
        </div>
      </div>
    </>
  );
}
