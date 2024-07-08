import React from "react";
import { userImage } from "../components/constants/data";
import { useAuth } from "../store/auth";

export default function Profile() {
  const { user } = useAuth();
  const userImageURL = userImage[0].url;

  // Conditional rendering if user is not yet authenticated or user data is still loading
  if (!user) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <>
      <div className="text-center mb-4">
        <hr />
        <h2 className="text-5xl text-center m-4 font-semibold playfair-display-sc-regular">
          Your Profile
        </h2>
        <hr />
      </div>
      <div className="max-w-md mx-auto mt-8 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <img
            src={userImageURL}
            alt="User"
            className="h-32 w-32 mx-auto mb-4 rounded-full"
          />
          {user.username && (
            <h3 className="text-lg mb-2">
              <span className="yeseva-one-regular text-2xl font-bold">
                Username :{" "}
              </span>
              <span className="josefin-sans italic">{user.username}</span>
            </h3>
          )}
          {user.email && (
            <h3 className="text-lg mb-2">
              <span className="yeseva-one-regular text-2xl font-bold">
                Email:
              </span>
              <span className="josefin-sans italic"> {user.email}</span>
            </h3>
          )}
          {user.phone && (
            <h3 className="text-lg mb-2">
              <span className="yeseva-one-regular text-2xl font-bold">
                Phone:
              </span>
              <span className="josefin-sans italic">{user.phone}</span>
            </h3>
          )}
        </div>
      </div>
    </>
  );
}
