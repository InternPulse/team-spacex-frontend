import "../styles/EmailVerified.css";
import emailVerifiedIcon from "../assets/Vector.svg";
import invoicePilotLogo from "../assets/InvoicePilot-Logo.svg";
import { Link } from "react-router-dom";

const EmailVerified = () => {
  return (
    <section className="email-verified">
      <Link to={"/"}>
        <img className="invoice-pilot-logo" src={invoicePilotLogo} alt="" />
      </Link>
      <div className="email-verified-body">
        <img src={emailVerifiedIcon} alt="" />
        <h1>Email Verified!</h1>
        <p>Your Email has been successfully Verified</p>
        <p>Tap on the button to continue with account registration</p>
        <button className="btn email-verified-btn">Continue</button>
      </div>
    </section>
  );
};

export default EmailVerified;
