import React from 'react';
import './home.css';
import { motion as m } from "framer-motion";
import { Link } from "react-router-dom";



const Home = () => {


    return (
        <m.div initial={{ y: "100%" }}
               animate={{ y: "0%" }}
               transition={{ duration: 0.75, ease: "easeOut" }}
               exit={{ opacity: 1 }}
               className="giraffeHome">
                <h1 className="giraffeHome__title">The World of<br/> Giraffe</h1>
               <Link to="/facts"><button type="button">Discover Giraffes</button></Link>
</m.div>
    );
}

export default Home;