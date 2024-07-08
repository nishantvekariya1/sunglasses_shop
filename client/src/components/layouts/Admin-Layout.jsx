import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full h-20 bg-white z-10 shadow-md px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <NavLink to="/">Admin Pannel</NavLink>
        </div>
        <div className="flex items-center">
          <nav>
            <ul className="flex space-x-8">
              <li>
                <NavLink to="/admin">Home</NavLink>
              </li>
              <li>
                <NavLink to="/admin/users">Users</NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">Contacts</NavLink>
              </li>
              <li>
                <NavLink to="/admin/products">Products</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="admin-container pt-20">
        <Outlet />
      </div>
    </>
  );
}
