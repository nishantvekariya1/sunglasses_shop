import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export default function AdminContacts() {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken, API } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact data: ", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`${API}/api/admin/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        getContactsData();
        alert("Deleted Successfully");
      } else {
        alert("Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="w-full max-w-4xl px-4">
        <div className="text-center mb-4">
          <hr />
          <h2 className="text-5xl text-center m-4 font-semibold playfair-display-sc-regular">
            Admin Contacts Data
          </h2>
          <hr />
        </div>
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="py-3 px-6">
                  Username
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Message
                </th>
                <th scope="col" className="py-3 px-6">
                  Delete
                </th>
              </tr>
            </thead>
            <tbody>
              {contactData.map(({ username, email, message, _id }, index) => (
                <tr key={index} className="bg-white border-b">
                  <td className="py-4 px-6">{username}</td>
                  <td className="py-4 px-6">{email}</td>
                  <td className="py-4 px-6">{message}</td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => deleteContactById(_id)}
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
