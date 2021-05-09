import React, { useState } from "react";
import { EditFieldsProps } from "../../utils/Types/interface";
import { Inputs } from "./Inputs";

export const EditFields: React.FC<EditFieldsProps> = (props) => {
    
    return(
        <>
            <div className="bloc" key={props.index}>
                <div className="bottom">
                    <div className="buttonGroups">

                        <div className={
                                (props.active.type && props.active.number == props.index ? 
                                `active left` : `left`)
                            } 
                            onClick={
                                () => {
                                    props.handleClick("type" + props.index);
                                    props.handleChangeButtons({
                                        number: props.index,
                                        type: true,
                                        question: false,
                                        reponse: false,
                                    });
                                }
                            }
                        >T</div>

                        <div className={
                                (props.active.question && props.active.number == props.index ? 
                                `active center` : `center`)
                            } 
                            onClick={
                                () => {
                                    props.handleClick("question" + props.index);
                                    props.handleChangeButtons({
                                        number: props.index,
                                        type: false,
                                        question: true,
                                        reponse: false,
                                    });
                                }
                            }
                        >Q</div>

                        <div className={
                                (props.active.reponse && props.active.number == props.index ? 
                                `active right` : `right`)
                            } 
                            onClick={
                                () => {
                                    props.handleClick("reponse" + props.index);
                                    props.handleChangeButtons({
                                        number: props.index,
                                        type: false,
                                        question: false,
                                        reponse: true,
                                    });
                                }
                            }
                        >R</div>

                    </div>

                    <Inputs
                        click={props.click}
                        index={props.index}
                        handleChange={props.handleChange}
                        settings={props.settings}
                        active={props.active}
                    />

                </div>
            </div>
        </>
    )
}