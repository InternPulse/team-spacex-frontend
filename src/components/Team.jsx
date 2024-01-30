import React from "react";

const Team = () => {
  return (
    <div className="preferences">
      <h1 className="preferences-heading">Teams Settings</h1>
      <div className="section-a">
        <div className="date-format">
          <h2>Teams Members</h2>
          <p>
            Select the date and time format to be used for your Zoho account
            activity.
          </p>
          <input type="date" name="" id="" />
        </div>
        <div className="picture-visibility">
          <h2>Profile Picture Visibility</h2>
          <p>Select who can view your profile picture.</p>
          <select name="select" id="">
            <option value="select" disabled>
              Select
            </option>
          </select>
        </div>
      </div>
      <div className="section-b">
        <div className="email">
          <h3>Email notifications</h3>
          <h2>New sign-in to account alert</h2>
          <span>
            <p>
              Receive email alerts whenever your account is signed in from a new
              device, browser, or location.
            </p>
          </span>
        </div>
        <div className="newsletter">
          <h2>Newsletter Subscription</h2>
          <span>
            <p>
              Receive marketing communication regarding InvoicePilot products,
              services, and events from InvoicePilot and its regional partners.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Team;
