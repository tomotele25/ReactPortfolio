import React from "react";
import "./button.css";
const Button = ({ title }) => {
  return (
    <>
      <div>
        <div className="contact__list">
          <button type="button">contact</button>
          <li>09152580773</li>
          <li>tOMOTELE@gmail.com</li>
          <li>3 kajola</li>
        </div>
        <div className="contact__list">
          <button type="button">Skills</button>
          <li>UI/UX</li>
          <li>Frontend development</li>
          <li>Backend development</li>
        </div>
        <div className="contact__list">
          <button type="button">Education</button>
          <li>
            Went to Fedral university
            <br /> of Abeokuta
          </li>
          <li>The best legacy Academy</li>
        </div>
      </div>
    </>
  );
};

export default Button;
