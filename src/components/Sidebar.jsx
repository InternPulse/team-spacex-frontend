import { useState } from "react";
import "../styles/Sidebar.css";
import invoicepilotlogo from "../assets/Invoice-pilot-logo2.svg";
import { Link } from "react-router-dom";
import { SidebarDB } from "../SidebarDB";
import downArrowIcon from "../assets/mingcute_down-line.svg";
// import upgradeIcon from "../assets/grommet-icons_upgrade.svg";
// import Dashboard from "../pages/Dashboard";
// import Invoice from "../pages/Invoice";
// import Template from "../pages/Template";
// import Customer from "../pages/Customer";
// import InvoiceTracker from "../pages/InvoiceTracker";
// import Settings from "../pages/Settings";

export default function Sidebar() {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);
  // // const [selectedComponent, setSelectedComponent] = useState("Dashboard");

  // const handleComponentChange = (componentName) => {
  //   setSelectedComponent(componentName);
  // };

  return (
    <div className="sidebar">
      <div className="sidebar-inner">
        <img
          className="invoice-pilot-logo"
          src={invoicepilotlogo}
          alt="Invoice Pilot Logo"
        />
        <span className="menu">
          <p>Menu</p>
          <img src={downArrowIcon} alt="" />
        </span>
        <div className="sidebar-list">
          {SidebarDB.map((item, index) => {
            const { name, icon, path } = item;
            return (
              <div
                key={item.path}
                className="h-[54px] sidebar-component"
                // onClick={handleComponentChange(name)}
              >
                <Link
                  to={path}
                  className="flex sidebar-link"
                  // activeclassName="active"
                >
                  <img src={icon} alt="" id="icon" />
                  <p id="name">{name}</p>
                </Link>
              </div>
            );
          })}
        </div>
        {/* <div className="upgrade">
          <img src={upgradeIcon} alt="" />
          <p>Upgrade for Free</p>
        </div> */}
      </div>
    </div>
  );
}
