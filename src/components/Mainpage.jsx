import React from "react";
import Header from "../components/Header.jsx";
import Services from "./Services.jsx";
import Footer from "./Footer.jsx";
import Details from "./Details.jsx";
import "./mainpage.css";
const Mainpage = () => {
  return (
    <>
      <div className="mainpage__container">
        <Header />
        <div className="details__container">
          <Details />
        </div>
        <div className="services__header">
          <h1>Services</h1>
        </div>

        <div className="blog">
          <Services
            logo={<i class="fa-sharp fa-solid fa-desktop"></i>}
            header="Frontend-developer"
            job=" html css react javascript typescript"
          />
          <Services
            logo={<i class="fa-sharp fa-solid fa-network-wired"></i>}
            header="Backend-developer"
            job="node js csharp Express js"
          />
          <Services
            logo={<i class="fa-solid fa-database"></i>}
            header="database"
            job="mongo gb sql excel"
          />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Mainpage;
