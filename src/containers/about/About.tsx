import React from "react";
import "./about.css";
import aboutImg from '../../assets/about.jpg';
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

const website = 'https://adzygal.com';

const About = () => {
    return (
        <m.div initial={{ y: "100%" }}
             animate={{ y: "0%" }}
             transition={{ duration: 0.75, ease: "easeOut" }}
             exit={{ opacity: 1 }}
             className="about">
            <div className="leftSide">
                <p className="subtext">
                    Years of Experience
                </p>
                <h1>
                    Portfolio Project App
                </h1>
                <p>
                    The Giraffe Facts App is a portfolio project app. It was born a perfect idea to showcase my knowledge based on my passion for these beautiful animals. Make yourself comfortable here, as you will learn a lot about giraffes!
                </p>
                <Link to={website} target="_blank"><button type="button" className="otherBtn">More Works</button></Link>
            </div>

            <m.div
                initial={{ scale: 0 }}
                animate={{ rotate: 360, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                }}
                className="rightSide">
                <img src={aboutImg} alt="giraffes" />
            </m.div>
        </m.div>
    )
}

export default About;