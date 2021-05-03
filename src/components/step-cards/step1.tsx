import React, { useEffect, useReducer, useState } from "react";
import { Button } from "../Button";
import { Step2 } from "./step2";
import {useBackContext, useStepContext} from '../../utils/CustomHooks/useGlobalContext'

interface Step1Props {
    nextStep: number;
}

export const Step1: React.FC<Step1Props> = () => {
    
    const initialState = {step: 0};

    function reducer(state: any, action: any) {
        switch (action.type) {
        case 'increment':
            return {step: state.step + 1};
        case 'decrement':
            return {step: state.step - 1};
        default:
            throw new Error();
        }
    }
    const [step, setStep] = useReducer(reducer, initialState);

    return(
        <>  
            {step.step == 0 ? 
                <span>
                    <b><h1>Bienvenue dans l'assistant de création de jeu de carte en ligne</h1></b>
                    <p>Vous ne disposez actuellement d'aucun jeu de carte</p>
                    <Button
                        text="Commencer"
                        wButton="big"
                        cButton="orange"
                        isImage={false}
                        link=""
                        isClick={true}
                        click={() => {
                            setStep({type: 'increment'})
                        }}
                    />
                </span>
            : 
                <Step2 
                    nextStep={step.step}
                    setNextStep={setStep}
                />
            }
        </>
    )
}