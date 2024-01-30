import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoicePilotUserPage from "./pages/InvoicePilotUserPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
       <Sidebar/> 
         <Routes> 
           {/* <Route path="/" element={<Sidebar />} />             */}
           <Route path="/" element={<Dashboard/>} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/invoice" element={<Invoice />} /> 
          </Routes>  
    </BrowserRouter>
  );
};

export default App;
