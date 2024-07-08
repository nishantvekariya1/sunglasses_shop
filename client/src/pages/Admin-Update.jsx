import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export default function AdminUpdate() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken, API } = useAuth();

  useEffect(() => {
    const getSingleUserData = async () => {
      try {
        const response = await fetch(
          `${API}/api/admin/users/${params.userId}`,
          {
            method: "GET",
            headers: { Authorization: authorizationToken },
          }
        );
        const userData = await response.json();
        setData(userData[0]);
      } catch (error) {
        console.log(error);
      }
    };

    getSingleUserData();
  }, [API, authorizationToken, params.userId]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API}/api/admin/users/update/${params.userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        alert("User updated successfully!");
        navigate("/admin/users");
      } else {
        alert("Failed to update user.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <form
          className="bg-gray-100 border border-gray-600 shadow w-full rounded-lg"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold text-center my-4 playfair-display-sc-regular">
            Update User
          </h2>
          <div className="px-5 py-7">
            <label className="font-semibold text-sm block"></label>
            <input
              type="text"
              className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
              name="username"
              placeholder="Username"
              required
              autoComplete="off"
              value={data.username}
              onChange={handleInput}
            />

            <label className="font-semibold text-sm block"></label>
            <input
              type="email"
              className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
              name="email"
              placeholder="Email"
              required
              autoComplete="off"
              value={data.email}
              onChange={handleInput}
            />

            <label className="font-semibold text-sm block"></label>
            <input
              type="number"
              className="border rounded-lg px-3 py-2 mt-1 mb-4 text-sm w-full"
              name="phone"
              placeholder="Phone"
              required
              autoComplete="off"
              value={data.phone}
              onChange={handleInput}
            />

            <button
              type="submit"
              className="transition duration-200 bg-blue-600 hover:bg-blue-500 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center mt-7"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
