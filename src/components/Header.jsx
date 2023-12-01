import React from "react";
import "./header.css";
const Header = () => {
  return (
    <>
      <div className="header__container">
        <h1 className="header">
          Tomotele
          <br />
          <span className="span">Christopher</span>
        </h1>

        <div className="toggle__container">
          <div className="toggle__btn"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
