import React from "react";
import { SwitchProps } from "../utils/Types/interface";

export const Switch: React.FC<SwitchProps> = (props) => {


    const switchMode = async () => {
        props.setIsDark(props.isDark ? false : true)
    }

    return(
        <div className={`switch ${props.isDark ? "darkMode" : "lightMode"}`} onClick={switchMode}></div>
    )
}