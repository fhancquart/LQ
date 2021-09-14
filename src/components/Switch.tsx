import React from "react";
import { SwitchProps } from "../utils/Types/interface";

export const Switch: React.FC<SwitchProps> = (props) => {


    const switchMode = async () => {
        props.setIsDark(props.isDark ? false : true)
    }

    const word = props.isDark ? "nuit" : "jour"

    return(
        <>
        <li className="mode">Mode {word}</li>
        <div className={`switch ${props.isDark ? "darkMode" : "lightMode"}`} onClick={switchMode}></div>
        </>
    )
}