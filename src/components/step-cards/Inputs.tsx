import React from "react";
import { InputsProps } from "../../utils/Types/interface";

export const Inputs: React.FC<InputsProps> = (props) => {

    const fields = ["question", "reponse"];

    return(
        <>
            {props.active.type || props.active.question || props.active.reponse ? 
                fields.map((v:any,i:number) => {
                    return (
                        props.active[v] && props.active.number == props.index ?
                            <input type="text" name={`${v}-${props.id}-${props.index}`} placeholder={`${props.index} - ${v}`} 
                                onChange={(e) => {
                                    props.handleChange(e,2);
                                }} value={props.settings.cards[v + "-" + props.id + "-" + props.index] || ""}
                            /> 
                        :  
                            ""
                    )
                })
                :
                <input type="text" name={`question-${props.id}-${props.index}`} placeholder={`${props.index} - Question`}
                    onChange={(e) => {
                        props.handleChange(e,2);
                    }} value={props.settings.cards["question-" + props.id + "-" + props.index] || ""}
                />
            }
        </>
    )

}