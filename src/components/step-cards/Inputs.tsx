import React from "react";
import { InputsProps } from "../../utils/Types/interface";

export const Inputs: React.FC<InputsProps> = (props) => {

    return(
        <>
            {props.active.type && props.active.number == props.index ?
                <input type="text" name={`type${props.index}`} placeholder="Type" 
                    onChange={(e) => {
                        props.handleChange(e);
                    }} value={props.settings["type" + props.index] || ""}
                /> 
            : (props.active.question && props.active.number == props.index ?
                <input type="text" name={`question${props.index}`} placeholder="Question"
                    onChange={(e) => {
                        props.handleChange(e);
                    }} value={props.settings["question" + props.index] || ""}
                /> 
            :  (props.active.reponse && props.active.number == props.index ?
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