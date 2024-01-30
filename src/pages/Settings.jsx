import "../styles/Settings.css";
import profileIcon from "../assets/gg_profile.svg";
import preferencesIcon from "../assets/pajamas_preferences.svg";
import teamIcon from "../assets/ant-design_team-outlined.svg";
import Profile from "../components/Profile";
import Preferences from "../components/Preferences";
import Team from "../components/Team";
import { useState } from "react";

const Settings = () => {
  const [activeSection, setActiveSection] = useState("Profile");

  const handleButtonClick = (sectionName) => {
    setActiveSection(sectionName);
  };

  return (
    <div className="settings">
      <h1 className="settings-heading">Settings</h1>
      <div className="settings-body">
        <section className="section-1">
          <button
            className={`home-btn ${activeSection === "Profile" && "active"}`}
            onClick={() => handleButtonClick("Profile")}
          >
            <img src={profileIcon} alt="" />
            <p>Profile</p>
          </button>
          <button
            className={`home-btn ${activeSection === "Preferences" && "active"}`}
            onClick={() => handleButtonClick("Preferences")}
          >
            <img src={preferencesIcon} alt="" />
            <p>Preferences</p>
          </button>
          <button
            className={`home-btn ${activeSection === "Team" && "active"}`}
            onClick={() => handleButtonClick("Team")}
          >
            <img src={teamIcon} alt="" />
            <p>Team</p>
          </button>
        </section>
        <section className="section-2">
          {activeSection === "Profile" && <Profile />}
          {activeSection === "Preferences" && <Preferences />}
          {activeSection === "Team" && <Team />}
        </section>
      </div>
    </div>
  );
};

export default Settings;
