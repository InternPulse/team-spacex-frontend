import RegisterUser from "../components/RegisterUser";
import Login from "../components/Login";
import "../styles/UserAdmission.css";
import { useState } from "react";
import invoiceImage from "../assets/invoice-image.svg";
import logo from "../assets/Logo.svg";
import ipsum from "../assets/ipsum.svg";
import logoIpsum from "../assets/logoipsum.svg";
import logoIpsumBrand from "../assets/logo-ipsum-brand.svg";
import logo2 from "../assets/logo2.svg";

const UserAdmission = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const showSignUp = () => {
    setIsSignIn(false);
  };

  const showSignIn = () => {
    setIsSignIn(true);
  };

  return (
    <section className="user-admission-body">
      <div className="user-admission">
        <div className="bg-white">
          <h1>
            {!isSignIn ? "Let’s create your Account" : "Login your account"}
          </h1>
          <p className="sub-heading">
            <span>InvoicePilot</span> helps freelancers, consultants, and small
            businesses <br /> around the world simplify their finances
          </p>
          <div className="user-admission-btns">
            <button
              onClick={showSignUp}
              // disabled={!isSignIn}
              className={!isSignIn ? "active" : ""}
            >
              Sign Up
            </button>
            <button
              onClick={showSignIn}
              // disabled={isSignIn}
              className={isSignIn ? "active" : ""}
            >
              Sign In
            </button>
          </div>
          <div className="register-login">
            {!isSignIn ? <RegisterUser /> : <Login />}
          </div>
        </div>
      </div>
      <div className="logo" style={{ backgroundImage: `url(${invoiceImage})` }}>
        {/* <div className="overlay"></div> */}
        <div className="slogan">
          <h2 className="">
            Trusted by Businesses for all Their invoice needs
          </h2>
          <div className="brands">
            <img src={logo} alt="" />
            <img src={ipsum} alt="" />
            <img src={logoIpsum} alt="" />
            <img src={logoIpsumBrand} alt="" />
            <img src={logo2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserAdmission;
