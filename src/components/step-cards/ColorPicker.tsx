import React from "react";
import { useState } from "react";
import { shadeColor } from "../../utils/shadeColor";

interface ColorPickerProps{
    index: number
}

export const ColorPicker: React.FC<ColorPickerProps> = (props) => {

    const [color, setColor] = useState("");   

    const colorPicker = {
        backgroundColor: color,
        borderColor: shadeColor(color,-10)
    };   

    return(
        <div className="ssButton" style={colorPicker}>
            <input type="text" name={`familyInput${props.index}`} style={color ? { color: 'white' } : {color: "#777777"}} placeholder="Nom de la famille" />
            <input type="color" value={color} onChange={e => setColor(e.target.value)} ></input>
        </div>
    )
}