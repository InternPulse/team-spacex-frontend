import "../styles/Profile.css";
import nigerianFlagIcon from "../assets/twemoji_flag-nigeria.svg";
import infoIcon from "../assets/material-symbols-light_info-outline.svg";

const Profile = () => {
  return (
    <div className="profile">
      <h1 className="profile-heading">Profile Settings</h1>
      <div className="profile-body">
        <form>
          <div className="input-fields">
            <span>
              <label htmlFor="first_name">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                id="first_name"
                name="first_name"
              />
            </span>
            <span>
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                id="last_name"
                name="last_name"
              />
            </span>
            <span>
              <label htmlFor="email">Last Name</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email Address"
              />
            </span>
            <span className="verify-number">
              <label htmlFor="number">Phone Number</label>
              <div>
                <button className="flag">
                  <img src={nigerianFlagIcon} alt="" />
                </button>
                <input
                  type="text"
                  name="number"
                  id="number"
                  placeholder="Phone Number"
                />
                <button className="verify">Verify</button>
              </div>
            </span>
          </div>
          <div className="instructions">
            <img src={infoIcon} alt="" />
            <p>
              It is required for you to verify your number. An otp would be sent
              to your phone number for verifcation
            </p>
          </div>
          <p className="change-password">Change Password</p>
          <p className="delete-account">Delete My Account</p>

          <div className="form-btns">
            <button className="home-btn home-btn-white">Cancel</button>
            <button className="home-btn home-btn-blue">Upgrade</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
