import React from "react";
import { Link } from "react-router-dom";
export const drops = [
  { label: "User Info", route: "/account" },
  { label: "Change Password", route: "/forget-password" },
  { label: "Cart History", route: "/forget-password" },
  // {label:"Logout",route:"/logout"},
];

const UserDrops = ({ handleUserCloseDrops }) => {
  const dropData = drops.map((d, index) => (
    <Link to={d.route} key={index}>
      <div className="py-1 px-3 hover:bg-yellow-300 hover:rounded-md m-0 hover:text-pink-600">
        {d.label}
      </div>
    </Link>
  ));
  return (
    <div
      onMouseLeave={handleUserCloseDrops}
      className="lg:ml-0 ml-0 lg:mt-1 lg:fixed mt-0 bg-pink-300 rounded-md mx-10"
    >
      {dropData}
    </div>
  );
};

export default UserDrops;
