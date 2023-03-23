import React, {useState} from 'react';
import './facts.css';
import { GiraffeFact } from "../../types";
import { factService } from "../../factService";
import { motion as m } from "framer-motion";

const Facts = () => {
    const [giraffeFact, setGiraffeFact] = useState<GiraffeFact | null>(null);
    const [move, setMove] = React.useState(false);



    const fetchGiraffeFact = () => {
        const randomFact = factService.getRandomFact();
        setGiraffeFact(randomFact);
    };
    return (
        <m.div initial={{ y: "100%" }}
               animate={{ y: "0%" }}
               transition={{ duration: 0.75, ease: "easeOut" }}
               className="facts">
            <m.div
                animate={{ x: move ? 250 : -250 }}
                transition={{ type: "spring", bounce: 0.6 }}
                onClick={() => {
                setMove(!move);
                }}
                className="facts-block">
            <m.h1
                initial={{ y: "70%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                Giraffe Fun Fact
            </m.h1>
            <button onClick={fetchGiraffeFact}>Get a Giraffe Fact</button>
            </m.div>
            {giraffeFact && <p>{giraffeFact.fact}</p>}
        </m.div>
    );
}

export default Facts;