import React from "react";
import { InputsProps } from "../../utils/Types/interface";

export const Inputs: React.FC<InputsProps> = (props) => {

    return(
        <>
            {props.click == "T" + props.index || props.active.active && props.active.button == "type" + props.index ? 
                <input type="text" name={`type${props.index}`} placeholder="Type" 
                    onChange={(e) => {
                        props.handleChange(e);
                    }} value={props.settings["type" + props.index] || ""}
                /> 
            : (props.click == "Q" + props.index || props.active.active2 && props.active.button2 == "question" + props.index ? 
                <input type="text" name={`question${props.index}`} placeholder="Question"
                    onChange={(e) => {
                        props.handleChange(e);
                    }} value={props.settings["question" + props.index] || ""}
                /> 
            :  (props.click == "R" + props.index || props.active.active3 && props.active.button3 == "reponse" + props.index ?  
                <input type="text" name={`reponse${props.index}`} placeholder="Réponse"
                    onChange={(e) => {
                        props.handleChange(e);
                    }} value={props.settings["reponse" + props.index] || ""}
                />
            :   
                <input type="text" name={`type${props.index}`} placeholder="Type" 
                    onChange={(e) => {
                        props.handleChange(e);
                    }} value={props.settings["type" + props.index] || ""}
                /> 
            ))}
        </>
    )

}