import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Customer from "./pages/Customer.jsx";
import Settings from "./pages/Settings.jsx";
import Invoice from "./pages/Invoice.jsx";
import InvoicePilotUserPage from "./pages/InvoicePilotUserPage.jsx";
import Template from "./pages/Template.jsx";
import InvoiceTracker from "./pages/InvoiceTracker.jsx";

const App = () => {
  return (
    <BrowserRouter>
       <InvoicePilotUserPage/> 
         <Routes> 
           {/* <Route path="/" element={<Sidebar />} />             */}
           {/* <Route path="/" element={<Dashboard/>} />
           <Route path="/template" element={<Template/>} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/invoicetracker" element={<InvoiceTracker/>} />
          <Route path="/invoice" element={<Invoice />} />  */}
          </Routes>  
    </BrowserRouter>
  );
};

export default App;
