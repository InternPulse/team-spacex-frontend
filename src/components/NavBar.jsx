import React from "react";
import DarkButton from "./DarkButton";
import { LeftLogoImg, RightLogoImg } from "../assets";
import "../css/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-box">
        <div className="logo-left">
          <img src={LeftLogoImg} alt="left-logo" width="56px" height="56px" />
        </div>

        <div className="logo-right">
          <img
            src={RightLogoImg}
            alt="right-logo"
            width="262px"
            height="20px"
          />
        </div>
      </div>

      <DarkButton content={"Create an Account"} style={"nav"} />
    </nav>
  );
};

export default NavBar;
