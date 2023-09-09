import React from "react";
import { Routes } from "react-router";
import { Link } from "react-router-dom";

const UserPage = () => {
  return (
    <div>
      UserPage
      <Link to="add-review">Review</Link>
    </div>
  );
};

export default UserPage;
