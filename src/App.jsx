import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Customer from './pages/Customer.jsx';
import Settings from './pages/Settings.jsx';
import Invoice from './pages/Invoice.jsx';

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
