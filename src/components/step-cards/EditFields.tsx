import React, { useState } from "react";
import { EditFieldsProps } from "../../utils/Types/interface";
import { Inputs } from "./Inputs";

export const EditFields: React.FC<EditFieldsProps> = (props) => {

    const [active,setActive] = useState({
        button: "", active: false,
        button2: "", active2: false,
        button3: "", active3: false,
      });
    
    return(
        <>
            <div className="bloc" key={props.index}>
                <div className="bottom">
                    <div className="buttonGroups">

                        <div className={
                                active.active && active.button == "type" + props.index || active.button == "" ? `active left` : (
                                props.click == "T" + props.index ? 
                                `active left` : `left`)
                            } 
                            onClick={
                                () => {
                                    props.handleClick("T" + props.index)
                                    props.handleInput("type" + props.index)
                                    setActive({
                                        button: "type" + props.index, active: true,
                                        button2: "question" + props.index, active2: false,
                                        button3: "reponse" + props.index, active3: false,
                                    })
                                }
                            }
                        >T</div>

                        <div className={
                                active.active2 && active.button2 == "question" + props.index ? `active center` :
                                (props.click == "Q" + props.index ? 
                                `active center` : `center`)
                            } 
                            onClick={
                                () => {
                                    props.handleClick("Q" + props.index)
                                    props.handleInput("question" + props.index)
                                    setActive({
                                        button: "type" + props.index, active: false,
                                        button2: "question" + props.index, active2: true,
                                        button3: "reponse" + props.index, active3: false,
                                    })
                                }
                            }
                        >Q</div>

                        <div className={
                                active.active3 && active.button3 == "reponse" + props.index ? `active right` :
                                (props.click == "R" + props.index ? 
                                `active right` : `right`)
                            } 
                            onClick={
                                () => {
                                    props.handleClick("R" + props.index)
                                    props.handleInput("reponse" + props.index)
                                    setActive({
                                        button: "type" + props.index, active: false,
                                        button2: "question" + props.index, active2: false,
                                        button3: "reponse" + props.index, active3: true,
                                    })
                                }
                            }
                        >R</div>

                    </div>

                    <Inputs
                        click={props.click}
                        index={props.index}
                        handleChange={props.handleChange}
                        settings={props.settings}
                        active={active}
                    />

                </div>
            </div>
        </>
    )
}