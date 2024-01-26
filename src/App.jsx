import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserAdmission from "./pages/UserAdmission";
import ConfirmEmail from "./components/ConfirmEmail";
import EmailVerified from "./components/EmailVerified";
import WelcomeBack from "./components/WelcomeBack";
import SetUpAccount from "./components/SetUpAccount";
import SetUpAccountSuccess from "./components/SetUpAccountSuccess";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/UserAdmission" element={<UserAdmission />} />
          <Route path="/ConfirmEmail" element={<ConfirmEmail />} />
          <Route path="/EmailVerified" element={<EmailVerified />} />
          <Route path="/WelcomeBack" element={<WelcomeBack />} />
          <Route path="/SetUpAccount" element={<SetUpAccount />} />
          <Route
            path="/SetUpAccountSuccess"
            element={<SetUpAccountSuccess />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
