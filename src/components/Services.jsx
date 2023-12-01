import React from "react";

import "./services.css";
const Services = ({ logo, header, job }) => {
  return (
    <>
      <div className="Container">
        <div className="blog__content">
          <h1>{logo}</h1>
          <h2>{header}</h2>
          <h3>{job}</h3>
        </div>
      </div>
    </>
  );
};

export default Services;
