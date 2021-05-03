import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Step3 } from "./step3";
import {useBackContext, useStepContext} from '../../utils/CustomHooks/useGlobalContext'
import { Step1 } from "./step1";


interface Step2Props {
    nextStep: number;
    setNextStep: (c: object) => void
}

export const Step2: React.FC<Step2Props> = (props) => {
    return(
        <>  
                {props.nextStep == 1 ? 
                    <span>
                        <b><h1>Dites-nous en plus</h1></b>

                        <div className="inputs">
                            <input type="text" name="name" placeholder="Nom du jeu"/>
                            <input type="text" name="characters" placeholder="7 max."/>
                            <textarea name="summary" placeholder="50 caractères max." maxLength={50}></textarea>
                        </div>

                        <Button
                            text="Suivant"
                            wButton="big"
                            cButton="orange"
                            isImage={false}
                            link=""
                            isClick={true}
                            click={() => {
                                props.setNextStep({type: 'increment'})
                            }}
                        />
                        
                    </span>
                :                 
                    <Step3 
                        nextStep={3}
                    />
                }
        </>
    )
}