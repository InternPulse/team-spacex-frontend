import "../styles/SetUpAccountSuccess.css";
import invoicePilotLogo from "../assets/InvoicePilot-Logo.svg";
import checkSuccessIcon from "../assets/eva_checkmark-circle-outline.svg";

const SetUpAccountSuccess = () => {
  return (
    <section className="set-up-account-success">
      <img className="invoice-pilot-logo" src={invoicePilotLogo} alt="" />
      <div className="set-up-account-success-body">
        <img src={checkSuccessIcon} alt="" />
        <h5>
          Account Created! You are now on a 14 days free trial of our standard
          subscription plan!
        </h5>
        <p>Enjoy using Invoicepilot</p>
        <button className="btn">Create your first Invoice</button>
        <p>Later</p>
      </div>
    </section>
  );
};

export default SetUpAccountSuccess;
