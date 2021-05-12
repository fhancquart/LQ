import React from "react";
import { InputsProps } from "../../utils/Types/interface";

export const Inputs: React.FC<InputsProps> = (props) => {

    const fields = ["type", "question", "reponse"];


    return(
        <>
            {props.active.type || props.active.question || props.active.reponse ? 
                fields.map((v:any,i:number) => {
    console.log(props.settings[v + "-" + props.id + "-" + props.index])

                    return (
                        props.active[v] && props.active.number == props.index ?
                            <input type="text" name={`${v}-${props.id}-${props.index}`} placeholder={`${props.index} - ${v}`} 
                                onChange={(e) => {
                                    props.handleChange(e);
                                }} value={props.settings[v + "-" + props.id + "-" + props.index] || ""}
                            /> 
                        :  
                            ""
                    )
                })
                :
                <input type="text" name={`type-${props.id}-${props.index}`} placeholder={`${props.index} - Type`}
                    onChange={(e) => {
                        props.handleChange(e);
                    }} value={props.settings["type" + props.index] || ""}
                />
            }
        </>
    )

}