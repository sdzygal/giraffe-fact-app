import React from 'react';
import Facts from "./containers/facts/Facts";
import Home from "./containers/home/Home";
import About from "./containers/about/About";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
   <div className="App">
         <AnimatePresence>
            <Navbar />
            <Routes>
            <Route index path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            <Route path="/facts" element={<Facts />} />
           </Routes>  </AnimatePresence>
   </div>
  );
}

export default App;
