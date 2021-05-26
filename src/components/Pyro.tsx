import React, { useContext } from "react";
import { BackgroundContext } from "../utils/CustomHooks/useBackground";

interface PyroProps {
}

export const Pyro: React.FC<PyroProps> = () => {

    const contextFirework = useContext(BackgroundContext);
    const {active} = contextFirework;
    
    return(
        <>
            {active ? 
                <div className="firework">
                    <div className="before"></div>
                    <div className="after"></div>
                </div>
            : ""}
        </>
    )
}