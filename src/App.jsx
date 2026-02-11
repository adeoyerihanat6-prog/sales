import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Order from "./pages/Order";
import Button from "./Button";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      
      <header className="bg-black w-full fixed top-0 left-0 z-50 shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto p-4">
          
          
          <img
            src="Logo.svg"
            alt="Logo"
            className="w-16 h-16 md:w-20 md:h-20"
          />

          
          <button
            className="text-white text-3xl md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>

         
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/" className="text-white hover:text-red-600">Home</Link>
            <Link to="/about" className="text-white hover:text-red-600">About Us</Link>
            <Link to="/service" className="text-white hover:text-red-600">Services</Link>
            <Link to="/contact" className="text-white hover:text-red-600">Contact Us</Link>
            <Link to="/career" className="text-white hover:text-red-600">Career</Link>
            <Button />
          </nav> 
        </div>

        
        {open && (
          <nav className=" flex flex-col gap-4 p-4 bg-black md:hidden w-full transition-all duration-300 ease-in-out">
            <Link to="/" className="text-white hover:text-red-600" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/about" className="text-white hover:text-red-600" onClick={() => setOpen(false)}>About Us</Link>
            <Link to="/service" className="text-white hover:text-red-600" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/contact" className="text-white hover:text-red-600" onClick={() => setOpen(false)}>Contact Us</Link>
            <Link to="/career" className="text-white hover:text-red-600" onClick={() => setOpen(false)}>Career</Link>
            <Button />
          </nav>
        )}
      </header>

     
      <div className="pt-[100px] md:pt-[120px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
