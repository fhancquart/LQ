import React from "react";
import { EditFieldsProps } from "../../../utils/Types/interface";
import { ButtonGroups } from "./ButtonGroups";
import { Inputs } from "./Inputs";

export const EditFields: React.FC<EditFieldsProps> = (props) => {

    const fields = ["question", "reponse"];
    
    return(
        <>
            <div className="bloc" key={props.index}>
                <div className="bottom">
                    <div className="buttonGroups">
                        {fields.map((v:any,i:number) => {
                            return (
                                <ButtonGroups 
                                    id={props.id}
                                    field={v}
                                    index={props.index}
                                    i={i}
                                    settings={props.settings}
                                    setSettings={props.setSettings}
                                    handleChangeButtons={props.handleChangeButtons}
                                />
                            )
                        })}
                    </div>
                    <Inputs
                        id={props.id}
                        index={props.index}
                        handleChange={props.handleChange}
                        settings={props.settings}
                    />
                </div>
            </div>
        </>
    )
}