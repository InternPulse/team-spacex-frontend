import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAdmission from "./pages/UserAdmission";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/UserAdmission" element={<UserAdmission />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
