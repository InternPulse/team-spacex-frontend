import RegisterUser from "../components/RegisterUser";
import Login from "../components/Login";
import "../styles/UserAdmission.css";
import { useState } from "react";
import Image from "../assets/image 1.svg";

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
      <div className="logo">
        <img src={Image} alt="" />
      </div>
    </section>
  );
};

export default UserAdmission;
