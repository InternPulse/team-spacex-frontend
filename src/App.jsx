import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import InvoicePilotUserPage from "./pages/InvoicePilotUserPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvoicePilotUserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
