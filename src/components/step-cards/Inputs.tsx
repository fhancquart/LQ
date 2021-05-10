import React from "react";
import { InputsProps } from "../../utils/Types/interface";

export const Inputs: React.FC<InputsProps> = (props) => {

    const fields = ["type", "question", "reponse"];

    console.log(props.active)

    return(
        <>
            {props.active.type || props.active.question || props.active.reponse ? 
                fields.map((v:any,i:number) => {
                    return (
                        props.active[v] && props.active.number == props.index ?
                            <input type="text" name={`${v}${props.index}`} placeholder={`${v}`} 
                                onChange={(e) => {
                                    props.handleChange(e);
                                }} value={props.settings[v + props.index] || ""}
                            /> 
                        :  
                            ""
                    )
                })
                :
                <input type="text" name={`type${props.index}`} placeholder="Type" 
                    onChange={(e) => {
                        props.handleChange(e);
                    }} value={props.settings["type" + props.index] || ""}
                />
            }
        </>
    )

}