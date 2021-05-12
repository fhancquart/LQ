import React, { useContext, useState} from "react";
import {PrevNextContext} from '../../utils/CustomHooks/usePrevNextContext'
import { shadeColor } from "../../utils/shadeColor";
import { Button } from "../Button";
import Image from 'next/image';
import { StepProps } from "../../utils/Types/interface";
import { EditFields } from "./EditFields";
import { ColorPicker } from "./ColorPicker";

export const Step3: React.FC<StepProps> = (props) => {
    
    const context = useContext(PrevNextContext);
    const {step, Next} = context;

    return(
        <>  
            {step == 3 || step != 2 ? 
                "YO"
            :                 
                <span className="step3">      
                    <span className="step">2/3</span>              
                    <b><h1>Passons à l'édition</h1></b>
                    <p>Nom du jeu : <b>{props.settings.name}</b></p>

                    <p>Pour chaque familles, renseignez un titre et une couleur. Puis renseignez vos 6 Types <b>(T)</b>, Questions <b>(Q)</b>, et Réponses <b>(R)</b></p>

                    <div className="edition">
                        {props.active.map((v:any,i:number) => {
                            return(
                                <span>
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
                                        <ColorPicker index={i} />
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
                                        {v.content.map((v2:any,i2:number) => {
                                            return (
                                                <EditFields 
                                                    id={v.id}
                                                    click={props.click}
                                                    handleClick={props.handleClick}
                                                    active={v2}
                                                    setActive={props.setActive}
                                                    handleChange={props.handleChange}
                                                    settings={props.settings}
                                                    handleChangeButtons={props.handleChangeButtons}
                                                    index={i2+1}
                                                    key={i2+1}
                                                />
                                            )
                                        })}
                                    </div>   
                                </span>    
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