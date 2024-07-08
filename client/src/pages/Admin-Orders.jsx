import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getAllOrdersData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/getallorders`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setOrders(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllOrdersData();
  }, []);
  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>Admin Orders Data</h1>
        </div>
        <div className="container admin-users"></div>
      </section>
    </>
  );
}
