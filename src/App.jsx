import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import Customer from "./pages/Customer.jsx";
import Settings from "./pages/Settings.jsx";
import Invoice from "./pages/Invoice.jsx";
import InvoicePilotUserPage from "./pages/InvoicePilotUserPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvoicePilotUserPage />} />
        {/* <Route path="/" element={<Sidebar />} />             */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/invoice" element={<Invoice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
