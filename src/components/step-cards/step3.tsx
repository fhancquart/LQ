import React, { useContext, useReducer} from "react";
import {PrevNextContext} from '../../utils/CustomHooks/usePrevNextContext'
import {initialState, reducer} from '../../utils/CustomHooks/usePrevNextFamily'
import { Button } from "../Button";
import { StepProps } from "../../utils/Types/interface";
import { EditFields } from "./EditFields";
import { HeaderFamily } from "./HeaderFamily";
import { Step4 } from "./Step4";

export const Step3: React.FC<StepProps> = (props) => {
    
    const context = useContext(PrevNextContext);
    const {step, Next} = context;

    const [prevNextFamily, dispatch] = useReducer(reducer, initialState)
    
    return(
        <>  
            {step == 3 || step != 2 ? 
                <Step4 
                    settings={props.settings}
                    group={props.group}
                    family={props.family}
                />
            :                 
                <span className="step3">      
                    <span className="step">2/3</span>              
                    <b><h1>Passons à l'édition</h1></b>
                    <p>Nom du jeu : <b>{props.settings.others.name}</b></p>

                    <p>Pour vos {props.group} familles, renseignez un titre et une couleur. Puis renseignez vos {props.family} Questions <b>(Q)</b>, et Réponses <b>(R)</b></p>

                    <div className="edition">
                        {props.settings.cards.map((v:any,i:number) => {
                            return (
                            prevNextFamily.count == i ?
                                <span key={i}>
                                    <div className="top">
                                        <HeaderFamily 
                                            active={v}
                                            i={i}
                                            handleChange={props.handleChange}
                                            settings={props.settings}
                                            prevNextFamily={prevNextFamily}
                                            dispatch={dispatch}
                                        />
                                    </div>    
                                    <div className="bottomBloc">
                                        {Object.keys(props.settings.cards[i]).map((v2:any,i2:number) => {
                                            return (
                                                i2 !== 0 &&
                                                <EditFields 
                                                    id={i}
                                                    setSettings={props.setSettings}
                                                    handleChange={props.handleChange}
                                                    settings={props.settings}
                                                    handleChangeButtons={props.handleChangeButtons}
                                                    index={i2}
                                                    key={i2}
                                                />
                                            )
                                        })}
                                    </div>   
                                </span>    
                            : ""
                            )
                        })}
                    </div>

                    <Button
                        text="J'ai terminé"
                        wButton="big"
                        cButton="orange"
                        isImage={false}
                        link=""
                        isClick={true}
                        click={Next}
                    />
                </span>
            }
        </>
    )
}