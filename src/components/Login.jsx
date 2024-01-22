import "../styles/Login.css";
// import eyeClosedIcon from "../assets/eye-closed.svg";
import lockIcon from "../assets/lock-01.svg";
import mailIcon from "../assets/mail-01.svg";
import googleIcon from "../assets/Google.svg";
import lineIcon from "../assets/Vector 2.svg";
import { useState, useRef, useEffect } from "react";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  const userRef = useRef();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errMsgs, setErrMsgs] = useState({});

  useEffect(() => {
    userRef.current.focus();
  }, []);

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
    const { email, password } = formData;
    const errors = {};
    const isPasswordValid = PWD_REGEX.test(password);
    const isEmailValid = EMAIL_REGEX.test(email);

    if (!email) {
      errors.email = "Email is required!";
    } else if (!isEmailValid) {
      errors.email = "Enter a valid email address";
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
  };

  return (
    <section className="login">
      <form onSubmit={handleLogin}>
        <div className="input-fields">
          <span>
            <input
              type="email"
              placeholder="Email"
              ref={userRef}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <img src={mailIcon} alt="mail icon" />
            {errMsgs.email && <p className="error-message">{errMsgs.email}</p>}
          </span>
          <span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <img src={lockIcon} alt="lock icon" />
            {/* <img className="eye" src={eyeClosedIcon} alt="" /> */}
            {errMsgs.password && (
              <p className="error-message">{errMsgs.password}</p>
            )}
          </span>
        </div>
        <button className="btn login-btn">Login</button>
        <div className="line">
          <img src={lineIcon} alt="line-icon" />
          <p>Or</p>
          <img src={lineIcon} alt="line-icon" />
        </div>
        <span className="google">
          <img src={googleIcon} alt="google icon" />
          <p>Continue with Google</p>
        </span>
      </form>
    </section>
  );
};

export default Login;
