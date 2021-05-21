import React from "react";
import { shadeColor } from "../../utils/shadeColor";

interface ColorPickerProps{
    index: number
    handleChange: any
    settings: any
}

export const ColorPicker: React.FC<ColorPickerProps> = (props) => {

    const color = props.settings.cards[props.index][0]["color-" + (props.index + 1)];
    const name = props.settings.cards[props.index][0]["familyName-" + (props.index + 1)];

    const colorPicker = {
        backgroundColor: color,
        borderColor: shadeColor(color || "#f0f0f0",-10)
    };   

    return(
        <div className="ssButton" style={colorPicker}>
            <input 
                type="text" 
                name={`familyName-${props.index + 1}`} 
                style={color ? { color: 'white', fontWeight: "bolder" } : {color: "#999999", fontWeight: "bolder"}} 
                placeholder={`Famille ${props.index + 1}`} 
                onChange={e => props.handleChange(e,2, 0, props.index)} 
                value={name}
            />
            <input 
                type="color" 
                name={`color-${props.index + 1}`} 
                onChange={e => props.handleChange(e,2, 0, props.index)} 
                value={color}
            />
        </div>
    )
}