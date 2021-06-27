import React from "react";
import Image from 'next/image';
import { ColorPicker } from "./ColorPicker";

interface NavigationProps{
    prevClick: any
    nextClick: any
    isInput: boolean
    text?: string
    i?: any
    handleChange?: any
    settings?: any
}

export const Navigation: React.FC<NavigationProps> = (props) => {
    return(
        <>
            <span className="prevSsButton" onClick={props.prevClick}>
                <Image 
                    src="/SVG/arrow.svg" 
                    alt="Arrow"
                    width="30"
                    height="30"
                    className="arrow"
                />
            </span>

            {props.isInput ? 
                <ColorPicker index={props.i} handleChange={props.handleChange} settings={props.settings} />
            : 
                <p className="numberCard"><b>{props.text}</b></p>
            } 

            <span className="nextSsButton" onClick={props.nextClick}>
                <Image 
                    src="/SVG/arrow.svg" 
                    alt="Arrow"
                    width="30"
                    height="30"
                    className="arrow"
                />
            </span>
        </>
    )
}