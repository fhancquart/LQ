import React from "react";
import { shadeColor } from "../../utils/shadeColor";

interface ColorPickerProps{
    index: number
    handleChange: any
    settings: any
}

export const ColorPicker: React.FC<ColorPickerProps> = (props) => {

    const colorPicker = {
        backgroundColor: props.settings["color" + props.index],
        borderColor: shadeColor(props.settings["color" + props.index] || "#f0f0f0",-10)
    };   

    console.log(props.settings["color" + props.index])

    return(
        <div className="ssButton" style={colorPicker}>
            <input 
                type="text" 
                name={`familyInput${props.index}`} 
                style={props.settings["color" + props.index] ? { color: 'white', fontWeight: "bolder" } : {color: "#999999", fontWeight: "bolder"}} 
                placeholder={`Famille ${props.index + 1}`} 
                onChange={e => props.handleChange(e) } 
                value={props.settings["familyInput" + props.index]} 
            />
            <input 
                type="color" 
                name={`color${props.index}`} 
                value={props.settings["color" + props.index]} 
                onChange={e => props.handleChange(e)} 
            />
        </div>
    )
}