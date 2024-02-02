import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Customer.css";
import dropdown from "../assets/dropdowm.svg";
import search from "../assets/search.svg";
import notification from "../assets/notification.svg";
import customericon from "../assets/customer-image.svg";
import plusicon from "../assets/plusicon.svg";
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const Customer = () => {
  // const [data, setData] = useState([]);
  // const [selctedOption, setSelectedOption] = useState("");
  const [formValidation, setFormValidation] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state

  const [customerData, setCustomerData] = useState({
    customer_type: "",
    primary_contact_first_name: "",
    primary_contact_last_name: "",
    company_name: "",
    currency: "",
    customer_email: "",
    customer_phone_work: "",
    customer_phone_mobile: "",
    salutation: "",
    language: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData({ ...customerData, [name]: value });
    validateForm();
  };

  const validateForm = () => {
    const formValidation = customerData.primary_contact_first_name && customerData.primary_contact_last_name && customerData.customer_email  && customerData.salutation && customerData.language;
    setFormValidation(formValidation);
  };

  const formatPhoneNumber = (value) => {
    const phoneNumber = parsePhoneNumberFromString(value, 'NG');
    return phoneNumber ? phoneNumber.formatInternational() : '';
  };

  const handlePhoneChange = (e) => {
    const { name, value } = e.target;
    const formattedPhoneNumber = formatPhoneNumber(value);
    setCustomerData({ ...customerData, [name]: formattedPhoneNumber });
  };

  const handleCreateCustomer = async (e) => {
    e.preventDefault();
    if (!formValidation || loading) return;

    setLoading(true)

    try {
      const response = await axios.post(
        "https://team-spacex-backend-mbhhb.ondigitalocean.app/api/create-customer/",
        customerData,
        {
          headers: {
            Authorization: "Bearer YOUR_ACCESS_TOKEN", 
          },
        }
      );
      console.log("Customer created successfully:", response.data);
    } catch (error) {
      console.error("Failed to create customer:", error.response.data);
    } finally{
      setLoading(false)
    }
  };

  const handleCancel = () => {
    setCustomerData({
      customer_type: "",
      primary_contact_first_name: "",
      primary_contact_last_name: "",
      company_name: "",
      currency: "",
      customer_email: "",
      customer_phone_work: "",
      customer_phone_mobile: "",
      salutation: "",
      language: "",
    });
    setFormValidation(false);
  };

  return (
    <div className="customer-main flex justify-center items-center">
      <div className="container mx-auto py-3">
      <h2 className="customer-header pt-6">New Customer</h2>
      <form action="" onSubmit={handleCreateCustomer}>
      <div className="mt-8 mx-1 customer-form-body">
        <div>
          <div className="pt-3 pb-4 flex gap-14">
            <label htmlFor="customer_type" className="customer-label-text">Customer Type <span>&#9432;</span></label>
            <div className=" flex gap-10 ml-1">
            <div>
            <input
              type="radio"
              name="customer_type"
              value={customerData.customer_type}
              checked={customerData.customer_type === "Business"}
              onChange={handleInputChange}
            />
            <label htmlFor="Business" className="pl-2 customer-label-text">Business</label>
            </div>
            <div>
            <input
              type="radio"
              name="customer_type"
              value={customerData.customer_type}
              checked={customerData.customer_type === "Individual"}
              onChange={handleInputChange}
            />
            <label htmlFor="Individual" className="pl-2 customer-label-text">Individual</label>
            </div>
            </div>
          </div>
          <div className="flex gap-12 pt-6">
            <label htmlFor="primary_contact" className="customer-label-text pt-2.5">Primary Contact <span>&#9432;</span></label>
            <div className="flex gap-8 ml-1">
                <div>
                    <select name="salutation" id="salutation" className="customer-salutation" value={customerData.salutation} onChange={handleInputChange}>
                        <option value="salutation" className="customer-option">Salutation</option>
                        <option value="mr" className="customer-option">Mr</option>
                        <option value="mrs" className="customer-option">Mrs</option>
                        <option value="master" className="customer-option">Master</option>
                        <option value="miss" className="customer-option">Miss</option>
                        <option value="dr" className="customer-option">Dr</option>
                        <option value="eng" className="customer-option">Eng</option>
                        <option value="others" className="customer-option">Others</option>
                    </select>
                </div>
                <input type="text" placeholder="First Name" className="customer-name-input" onChange={handleInputChange} value={customerData.primary_contact_first_name}/>
                <input type="text" placeholder="Last Name" className="customer-name-input" onChange={handleInputChange} value={customerData.primary_contact_last_name}/>
            </div>
          </div>
          <div className="flex gap-16 pt-7">
            <label htmlFor="company_name" className="customer-label-text pt-2.5">Company Name</label>
            <input className="ml-4 customer-company-name" type="text" placeholder="Company Name" onChange={handleInputChange} value={customerData.company_name}/>
          </div>
          <div className="flex gap-36 pt-7">
            <label htmlFor="currency" className="customer-label-text pt-2.5">Currency</label>
            <div className="">
            <select name="currency" id="currency" className="customer-currency" onChange={handleInputChange} value={customerData.currency}>
                <option value="select-currency" className="customer-option">Select Currency</option>
                <option value="NGN" className="customer-option">NGN-NIGERIAN NAIRA</option>
                <option value="GBP" className="customer-option">GBP-POUNDS</option>
                <option value="EUR" className="customer-option">EUR-EURO</option>
                <option value="USD" className="customer-option">USD-DOLLAR</option>
            </select>
            </div>
          </div>
          <div className="flex gap-14 pt-7">
            <label htmlFor="customer_email" className="customer-label-text pt-2.5">Customer Email <span>&#9432;</span></label>
            <input type="email" name="" id="" placeholder="Email address" className="customer-email" onChange={handleInputChange} value={customerData.customer_email}/>
          </div>
          <div className="flex gap-16 pt-7">
            <label htmlFor="customer_phone" className="customer-label-text pt-2.5">Customer Phone</label>
                <div className="flex gap-6 ml-2">
                <input type="tel" name="" id="" placeholder="Work Phone" className="customer-phone-input" onChange={handlePhoneChange} value={customerData.customer_phone_work}/>
                <input type="tel" name="" id="" placeholder="Mobile" className="customer-phone-input" onChange={handlePhoneChange} value={customerData.customer_phone_mobile}/>
                </div>
          </div>
          <div className="flex gap-12 pt-7">
            <label htmlFor="portal_language" className="customer-label-text pt-2.5">Portal Language <span>&#9432;</span></label>
            <div>
                <select name="language" id="language" className="customer-language" onChange={handleInputChange} value={customerData.language}>
                    <option value="english" className="customer-option">English</option>
                    <option value="portuguese" className="customer-option">Portuguese</option>
                    <option value="spanish" className="customer-option">Spanish</option>
                    <option value="french" className="customer-option">French</option>
                    <option value="german" className="customer-option">German</option>
                </select>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-10 w-[378px] h-[52px] ml-12 mt-6">
        <button className=" button-1" disabled={!formValidation || loading}>
          {loading ? 'Saving...' : 'Save'}
        </button>
      <button className=" button-2" onClick={handleCancel}>Cancel</button>
      </div>
      </form>
      </div>
    </div>
  );
};

export default Customer;
