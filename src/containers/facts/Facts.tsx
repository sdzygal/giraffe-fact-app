import React, {useState} from 'react';
import './facts.css';
import { GiraffeFact, GiraffeImg } from "../../utils/types";
import { factService } from "../../utils/factService";
import { imgService } from "../../utils/imgService";
import { motion as m } from "framer-motion";
import {useIsBig, useIsMedium, useIsSmall} from "../../utils/media";


const Facts = () => {
    const [giraffeFact, setGiraffeFact] = useState<GiraffeFact | null>(null);
    const [giraffeImg, setGiraffeImg] = useState<GiraffeImg | null>(null);
    const [move, setMove] = React.useState(false);

    const isSmall = useIsSmall();
    const isMedium = useIsMedium();
    const isBig = useIsBig();



    const fetchGiraffeFact = () => {
        const randomFact = factService.getRandomFact();
        setGiraffeFact(randomFact);
    };

    const fetchGiraffeImg = () => {
        const randomItem = imgService.getRandomImg();
        setGiraffeImg(randomItem);
    };

    function handleClick() {
            fetchGiraffeFact();
            fetchGiraffeImg();
    }


    return (
        <m.div initial={{ y: "100%" }}
               animate={{ y: "0%" }}
               transition={{ duration: 0.75, ease: "easeOut" }}
               className="facts">
            <m.div
                initial={{ y: "70%" }}
                animate={{ y: "0" }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-block"
            >
            <h1
            >
               Giraffe Facts Pool
            </h1>
            <p>Get A Fun Fact About Giraffe In A Click</p>
            </m.div>
            <div className="facts-block">
            <m.div
                animate={isBig ? { x: move ? 50 : -340 } : {x: move ? 120 : -400}}
                transition={{ type: "spring"}}
                onClick={() => {
                setMove(!move);
                }}
                className="facts-button">
            <button onClick={handleClick}>Get a Fact
                </button>
            </m.div>

        <m.div
            animate={ isBig ? {x: move ? -210 : 40} : { x: move ? -290 : 190 }}
            transition={{ type: "spring" }}
            onClick={() => {
                setMove(!move);
            }}
            className="result">
            {giraffeImg && <img src={giraffeImg.img} alt="giraffe" className="giraffeImg" />}
            {giraffeFact && <p>{giraffeFact.fact}</p>}
        </m.div></div>
        </m.div>
    );
}

export default Facts;