import React, { Dispatch, SetStateAction, useContext, useEffect, useReducer, useState} from "react";
import {PrevNextContext} from '../../utils/CustomHooks/usePrevNextContext'
import { shadeColor } from "../../utils/shadeColor";
import { Button } from "../Button";
import Image from 'next/image';
import { StepProps } from "../../utils/Types/interface";
import { EditFields } from "./EditFields";

export const Step3: React.FC<StepProps> = (props) => {
    
    const context = useContext(PrevNextContext);
    const {step, Next} = context;

    const [color, setColor] = useState("");   

    const colorPicker = {
        backgroundColor: color,
        borderColor: shadeColor(color,-10)
    };    

    return(
        <>  
            {step == 3 || step != 2 ? 
                "YO"
            :                 
                <span className="step3">                    
                    <b><h1>Passons à l'édition</h1></b>
                    <p>Nom du jeu : <b>Nom</b></p>

                    <p>Pour chaque familles, renseignez un titre et une couleur. Puis renseignez vos 6 Types <b>(T)</b>, Questions <b>(Q)</b>, et Réponses <b>(R)</b></p>

                    <div className="edition">
                        <div className="top">
                            <span className="prevSsButton">
                                <Image 
                                    src="/SVG/arrow.svg" 
                                    alt="Arrow"
                                    width="25"
                                    height="25"
                                    className="arrow"
                                />
                            </span>
                            <div className="ssButton" style={colorPicker}>
                                <input type="text" style={color ? { color: 'white' } : {color: "#777777"}} placeholder="Nom de la famille" />
                                <input type="color" value={color} onChange={e => setColor(e.target.value)} ></input>
                            </div>
                            <span className="nextSsButton">
                                <Image 
                                    src="/SVG/arrow.svg" 
                                    alt="Arrow"
                                    width="25"
                                    height="25"
                                    className="arrow"
                                />
                            </span>
                        </div>    
                        <div className="bottomBloc">
                            {props.active.map((v:any,i:number) => {
                                return (
                                    <EditFields 
                                        click={props.click}
                                        handleClick={props.handleClick}
                                        active={v}
                                        setActive={props.setActive}
                                        handleChange={props.handleChange}
                                        settings={props.settings}
                                        handleChangeButtons={props.handleChangeButtons}
                                        index={i+1}
                                        key={i+1}
                                    />
                                )
                            })}
                        </div>                    
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