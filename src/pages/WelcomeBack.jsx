import "../styles/WelcomeBack.css";
import invoicePilotLogo from "../assets/InvoicePilot-Logo.svg";
import userProfileIcon from "../assets/user-profile-02.svg";
import lockIcon from "../assets/lock-01.svg";
import lineIcon from "../assets/Vector 2.svg";
import { useState, useRef } from "react";
import eyeOpenIcon from "../assets/eye-open-svgrepo-com.svg";
import eyeClosedIcon from "../assets/eye-closed.svg";
import { Link } from "react-router-dom";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const WelcomeBack = () => {
  const [reveal, setReveal] = useState(true);
  const userRef = useRef();

  const handleReveal = () => {
    setReveal(!reveal);
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errMsgs, setErrMsgs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrMsgs({});
    // console.log(value);
  };

  const validateForm = () => {
    const { username, password } = formData;
    const errors = {};
    const isPasswordValid = PWD_REGEX.test(password);

    if (!username) {
      errors.username = "Username is required!";
    }
    if (!password) {
      errors.password = "Password is required!";
    } else if (!isPasswordValid) {
      errors.password = "Enter a valid password";
    }

    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is valid");
    } else {
      setErrMsgs(validationErrors);
    }
    //   try {
    //     // const { username, password } = formData;
    //     const response = await axios.post(
    //       LOGIN_URL,
    //       JSON.stringify({
    //         username: formData.username,
    //         password: formData.password,
    //       }),
    //       {
    //         headers: { "Content-Type": "application/json" },
    //         withCredentials: true,
    //       }
    //     );
    //     console.log(response.data);
    //     console.log(response.token);
    //     console.log(JSON.stringify(response));
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

  return (
    <section className="welcome-back">
      <Link to={"/"}>
        <img className="invoice-pilot-logo" src={invoicePilotLogo} alt="" />
      </Link>
      <div className="welcome-back-body">
        <h1 className="">Welcome Back!</h1>
        <p className="sub-heading">
          Don't have an account? <span className="bold">Sign up</span>
        </p>
        <form onSubmit={handleLogin} className="welcome-back-form">
          <div className="input-fields">
            <span>
              <input
                type="text"
                placeholder="Username"
                ref={userRef}
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
              <img src={userProfileIcon} alt="user icon" />
              {errMsgs.username && (
                <p className="error-message">{errMsgs.username}</p>
              )}
            </span>
            <span>
              <input
                type={reveal ? "password" : "text"}
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <img src={lockIcon} alt="lock icon" />
              <img
                className="eye"
                src={reveal ? eyeClosedIcon : eyeOpenIcon}
                onClick={handleReveal}
                alt=""
              />
              {errMsgs.password && (
                <p className="error-message">{errMsgs.password}</p>
              )}
            </span>
          </div>
          <div className="remember-password">
            <span>
              <input type="checkbox" name="" id="" />
              <p>Remember me</p>
            </span>
            <p>Forgot Password?</p>
          </div>
          <button className="btn login-btn">Login</button>
          <div className="line">
            <img src={lineIcon} alt="line-icon" />
            <p>Or</p>
            <img src={lineIcon} alt="line-icon" />
          </div>
          <p className="bold">Sign Up</p>
        </form>
      </div>
    </section>
  );
};

export default WelcomeBack;
