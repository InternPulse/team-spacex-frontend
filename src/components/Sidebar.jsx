import "../styles/Sidebar.css";
import invoicepilotlogo from "../assets/Invoice-pilot-logo2.svg";
import { SidebarDB } from "../SidebarDB";
import downArrowIcon from "../assets/mingcute_down-line.svg";

export default function Sidebar({handleItemClick}) {

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
        <ul className="sidebar-list active">
          {SidebarDB.map((item, index) => {
            const { name, icon } = item;
            return (
              <li
                key={index}
                className="sidebar-component "
                onClick={() => handleItemClick(name)}
              >
                <img src={icon} alt="icon" />
                <p className="name">{name}</p>
              </li>
            );
          })}
        </ul>
        {/* <div className="upgrade">
          <img src={upgradeIcon} alt="" />
          <p>Upgrade for Free</p>
        </div> */}
      </div>
    </div>
  );
}
