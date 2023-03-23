import React from 'react';
import './home.css';
import { motion as m } from "framer-motion";

const Home = () => {
    return (
        <m.div initial={{ y: "100%" }}
               animate={{ y: "0%" }}
               transition={{ duration: 0.75, ease: "easeOut" }}
               exit={{ opacity: 1 }}
               className="giraffeHome">
            <h1 className="giraffeHome__title">Welcome to the World of Giraffe</h1>
        </m.div>
    );
}

export default Home;