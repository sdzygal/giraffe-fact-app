import React from 'react';
import './App.css';
import Facts from "./containers/facts/Facts";
import Home from "./containers/home/Home";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";


function App() {

  return (
   <div className="App">
         <AnimatePresence>
            <Navbar />
           <Routes>
            <Route index path="/" element={<Home />} key={1} />
         <Route path="/facts" element={<Facts />} />
           </Routes>  </AnimatePresence>
   </div>
  );
}

export default App;