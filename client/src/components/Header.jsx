import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import Search from "./Search";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../components/cart/Cart";
import { useCart } from "./cart/contextReducer";
import "../styles/header.css";
import navlogo from "./images/navlogo.png";

export default function Header() {
  const [cartView, setCartView] = useState(false);
  const { isLoggedIn } = useAuth();
  let data = useCart();
  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white z-10 shadow-md px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/">
            <div className="text-xl font-bold text-gray-800 mr-4">
              <img src={navlogo} alt="nav-logo" style={{ height: "48px" }} />
            </div>
          </NavLink>
          <div>
            <Search />
          </div>
        </div>

        <div className="flex items-center space-x-4 nav-div">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/menproduct">Men Product</NavLink>
              </li>
              <li>
                <NavLink to="/womenproduct">Women Product</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              {isLoggedIn ? (
                <>
                  <li>
                    <NavLink to="/profile">
                      <i class="fa-solid fa-user fa-lg mt-2"></i>
                    </NavLink>
                  </li>

                  <li>
                    <div
                      onClick={() => {
                        setCartView(true);
                      }}
                      className="cursor-pointer flex items-center"
                    >
                      <i class="fa-solid fa-bag-shopping fa-lg mt-2.5"></i>{" "}
                      <Badge pill bg="danger">
                        {data.length === 0 ? "" : data.length}
                      </Badge>
                    </div>
                    {cartView ? (
                      <Modal onClose={() => setCartView(false)}>
                        <Cart />
                      </Modal>
                    ) : null}
                  </li>
                  <li>
                    <NavLink to="/logout">
                      <span class="bg-blue-600 text-white py-2 px-4 border border-black-500 rounded transition-colors duration-300 ">
                        Logout
                      </span>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <NavLink to="/register">
                      <span class="bg-blue-600 text-white py-2 px-4 border border-black-500 rounded transition-colors duration-300 ">
                        Sign Up
                      </span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login">
                      <span class="bg-blue-600 text-white py-2 px-4 border border-black-500 rounded transition-colors duration-300 ">
                        Sign In
                      </span>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <div className="pt-20">
        {" "}
        {/* Adjust this padding top value according to your navbar's height */}
        {/* Content after the navbar goes here */}
      </div>
    </>
  );
}
