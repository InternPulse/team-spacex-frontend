import Sidebar from "../components/Sidebar";
import "../styles/InvoicePilotUserPage.css";
import dropdown from "../assets/dropdowm.svg";
import search from "../assets/search.svg";
import userProfileIcon from "../assets/Ellipse 3.svg";
import notificationIcon from "../assets/Frame 95.svg";
import plusIcon from "../assets/ic_outline-plus.svg";
import Dashboard from "../pages/Dashboard";
import Invoice from "../pages/Invoice";
import Template from "../pages/Template";
import Customer from "../pages/Customer";
import InvoiceTracker from "../pages/InvoiceTracker";
import Settings from "../pages/Settings";
import { useState } from "react";

const InvoicePilotUserPage = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (name) => {
    setSelectedItem(name);
  };

  return (
    <section className="invoice-pilot-user-page">
      <Sidebar handleItemClick={handleItemClick} selectedItem={selectedItem} />
      <div className="client-page">
        <div className="user-page">
          <nav>
            <div className="search-body">
              <div className="">
                <input
                  type="search"
                  placeholder="Search"
                  className="search-input"
                />
              </div>
              <div className="flex search-images input-container gap-1">
                <img src={search} alt="" />
                <img src={dropdown} alt="" />
              </div>
            </div>
            <div className="user-profile">
              <img src={plusIcon} alt="" />
              <img src={notificationIcon} alt="" />
              <img src={userProfileIcon} alt="" />
            </div>
          </nav>
          <div>
            {selectedItem === "Dashboard" && <Dashboard />}
            {selectedItem === "Invoice" && <Invoice />}
            {selectedItem === "Template" && <Template />}
            {selectedItem === "Customer" && <Customer />}
            {selectedItem === "InvoiceTracker" && <InvoiceTracker />}
            {selectedItem === "Settings" && <Settings />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvoicePilotUserPage;
