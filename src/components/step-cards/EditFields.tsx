import React, { createContext, Dispatch, SetStateAction, useCallback, useState } from "react";
import { EditFieldsProps } from "../../utils/Types/interface";

export const EditFields: React.FC<EditFieldsProps> = (props) => {

    // const context = createContext({});
    // const { Provider, Consumer } = context;

    // const tab = ({id, clickProps, clickHandle, children}) => {
    //     <Consumer>
    //         {({changeTab}) => 
    //             <div className={
    //                 clickProps == "T" + id ? 
    //                 `active left` : `left`
    //             }
    //             onClick={
    //                 () => clickHandle("T" + id)
    //             }>{children}</div>
    //         }
    //     </Consumer>
    // }
    const initialValues = {}
    const [inputs,setInputs] = useState("");
    const [inputs2,setInputs2] = useState("");
    const [inputs3,setInputs3] = useState("");

    console.log(inputs)
    
    return(
        <>
            <div className="bloc" key={props.index}>
                <div className="bottom">
                    <div className="buttonGroups">

                        <div className={
                                props.click == "T" + props.index ? 
                                `active left` : `left`
                            } 
                            onClick={
                                () => {
                                    props.handleClick("T" + props.index)
                                    props.handleInput("type" + props.index)
                                }
                            }
                        >T</div>

                        <div className={
                                props.click == "Q" + props.index ? 
                                `active center` : `center`
                            } 
                            onClick={
                                () => {
                                    props.handleClick("Q" + props.index)
                                    props.handleInput("question" + props.index)
                                }
                            }
                        >Q</div>

                        <div className={
                                props.click == "R" + props.index ? 
                                `active right` : `right`
                            } 
                            onClick={
                                () => {
                                    props.handleClick("R" + props.index)
                                    props.handleInput("reponse" + props.index)
                                }
                            }
                        >R</div>

                    </div>

                    {props.click == "T" + props.index ? 
                        <input type="text" name={`type${props.index}`} placeholder="Type" 
                            onChange={(e) => setInputs(e.target.value)} value={inputs}
                        /> 
                    : (props.click == "Q" + props.index ? 
                        <input type="text" name={`question${props.index}`} placeholder="Question"
                            onChange={(e) => setInputs2(e.target.value)} value={inputs2}
                        /> 
                    :  (props.click == "R" + props.index ?  
                        <input type="text" name={`reponse${props.index}`} placeholder="Réponse"
                            onChange={(e) => setInputs3(e.target.value)} value={inputs3}
                        />
                    :   
                        <input type="text" name={`reponse${props.index}`} placeholder="..."/>
                    ))}

                </div>
            </div>
        </>
    )
}