import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt=" "></img>
          <img src={Instagram} alt=" "></img>
          <img src={LinkedIn} alt=" "></img>
        </div>
        <div className="logo-f">
          <img src={Logo} alt=" "></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
