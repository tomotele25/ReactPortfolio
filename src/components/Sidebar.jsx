import React from "react";
import "./sidebar.css";
import Button from "../components/Button.jsx";
import profilePicture from "../assets/profile-picture.JPG";

const Sidebar = () => {
  return (
    <>
      <div className="container">
        <div>
          <div className="logo">
            <img src={profilePicture} alt={profilePicture} />
          </div>
          <div className="button">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
