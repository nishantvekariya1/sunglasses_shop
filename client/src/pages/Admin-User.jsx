import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getAllUserData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log(data);
      if (response.ok) {
        getAllUserData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="w-full max-w-4xl px-4">
        <div className="text-center mb-4">
          <hr />
          <h2 className="text-5xl text-center m-4 font-semibold playfair-display-sc-regular">
            Admin Users Data
          </h2>
          <hr />
        </div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Phone
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
              {users.map(({ username, email, phone, _id }, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="py-4 px-6">{username}</td>
                  <td className="py-4 px-6">{email}</td>
                  <td className="py-4 px-6">{phone}</td>
                  <td className="py-4 px-6">
                    <Link
                      to={`/admin/users/${_id}/edit`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => deleteUser(_id)}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
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
  );
}
