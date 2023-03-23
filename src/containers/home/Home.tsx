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
            <h1 className="giraffeHome__title">Welcome to
                <span className="giraffeWorld"> the Giraffe World</span>
            </h1>
            <div className="scrollDown">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </m.div>
    );
}

export default Home;