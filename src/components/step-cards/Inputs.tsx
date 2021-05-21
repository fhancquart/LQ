import React from "react";
import { InputsProps } from "../../utils/Types/interface";

export const Inputs: React.FC<InputsProps> = (props) => {

    const fields = ["question", "reponse"];

    const keySetting = props.settings.cards[props.id][props.index];
    const indexPlus = props.index;


    return(
        <>
            {keySetting.question == true || keySetting.reponse == true ? 
                fields.map((v:any,i:number) => {
                    return (
                        keySetting[v] && keySetting.id == indexPlus ?
                            <input key={i} type="text" name={`${v}-${indexPlus}`} placeholder={`${indexPlus} - ${v}`} 
                                onChange={(e) => {
                                    props.handleChange(e,2, props.index, props.id);
                                }} 
                                value={keySetting[v + "-" + indexPlus]}
                            /> 
                        :  
                            ""
                    )
                })
                :
                <input type="text" name={`question-${indexPlus}`} placeholder={`${indexPlus} - Question`}
                    onChange={(e) => {
                        props.handleChange(e,2, props.index, props.id);
                    }}
                    value={keySetting["question-" + indexPlus]}
                />
            }
        </>
    )

}