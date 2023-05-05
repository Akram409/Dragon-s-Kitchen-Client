import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UserDetails = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <div className="container mx-auto my-10">
      <div className="hero text-white">
        <div className="hero-content flex-col lg:flex-row">
          <div>
          {user?.photoURL ? (
            <div className="avatar">
              <div className="w-5/6 rounded-full">
                <img src={user?.photoURL} />
              </div>
            </div>
          ) : (
            <div className="avatar">
              <div className="w-5/6 rounded-full">
                <img
                  src={
                    "https://raw.githubusercontent.com/Akram409/Developer-Portfolio/main/images/profile.png"
                  }
                />
              </div>
            </div>
          )}
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-3">
              {user?.displayName || "Akram Hossain"}
            </h1>
            <p className="text-2xl mb-2">
              <strong>Email:</strong> {user?.email || "test@gmail.com"}
            </p>
            <p className="text-2xl mb-2">
              <strong>Phone:</strong> 0181XXXXXXX
            </p>
            <p className="text-2xl mb-2">
              <strong>Address:</strong> Lorem ipsum dolor sit amet cdelectus nam quia vitae amet ipsa, dolore.
            </p>
            <p className="text-2xl mb-5">
              <strong>Biography:</strong> Lorem ipsum dolor sit amet cdelectus nam quia vitae amet ipsa, dolore, vero sunt facilis praesentium rem odit.
            </p>
            <button className="btn btn-primary text-white">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
