import "../styles/SetUpAccount.css";
import invoicePilotLogo from "../assets/InvoicePilot-Logo.svg";

const SetUpAccount = () => {
  return (
    <section className="set-up-account">
      <img className="invoice-pilot-logo" src={invoicePilotLogo} alt="" />
      <div className="set-up-account-body">
        <h1>Set up Your Account</h1>
        <p className="sub-heading">Enter all required details</p>
        <form>
          <div className="input-fields">
            <span>
              <label htmlFor="fullname">Fullname*</label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Fullname"
              />
            </span>
            <span>
              <label htmlFor="businessname">Business Name*</label>
              <input
                type="text"
                name="businessname"
                id="businessname"
                placeholder="Business Name"
              />
            </span>
            <span>
              <label htmlFor="businesscategory">Business Category*</label>
              <input
                type="text"
                name="businesscategory"
                id="businesscategory"
                placeholder="Business Category"
              />
            </span>
            <span>
              <label htmlFor="transactioncurrency">Transaction Currency*</label>
              <input
                type="text"
                name="transactioncurrency"
                id="transactioncurrency"
                placeholder="Transaction Currency"
              />
            </span>
          </div>
          <button className="btn set-up-account-btn">Proceed</button>
        </form>
      </div>
    </section>
  );
};

export default SetUpAccount;
