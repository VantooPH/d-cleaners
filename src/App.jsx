import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Quote from "./pages/Quote";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;