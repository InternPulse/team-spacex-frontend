import React from "react";
import DarkButton from "./DarkButton";
import { LeftLogoImg, RightLogoImg } from "../assets";

const NavBar = () => {
  return (
    <header className="header">
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

        <DarkButton />
      </nav>
    </header>
  );
};

export default NavBar;
