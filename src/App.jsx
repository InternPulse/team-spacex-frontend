import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

function App() {
  return <>
  <BrowserRouter>
  <Navbar/>
   <Routes>

   </Routes>
   <Footer/>
  </BrowserRouter>
  </>;
}

export default App;
