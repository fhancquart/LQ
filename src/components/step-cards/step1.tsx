import React, { Dispatch, SetStateAction, useContext } from "react";
import { Button } from "../Button";
import { Step2 } from "./Step2";
import {PrevNextContext} from '../../utils/CustomHooks/usePrevNextContext'
import {StepProps} from '../../utils/Types/interface'

export const Step1: React.FC<StepProps> = (props) => {

    const context = useContext(PrevNextContext);
    const {step, Next} = context;

    return(
        <>  
             {step == 1 || step != 0 ? 
                <Step2 
                    click={props.click}
                    setClick={props.setClick}
                    inputName={props.inputName}
                    setInputName={props.setInputName}
                />
            : 
                <span className="step1">
                    <b><h1>Bienvenue dans l'assistant de création de jeu de carte en ligne</h1></b>
                    <p>Vous ne disposez actuellement d'aucun jeu de carte</p>
                    <Button
                        text="Commencer"
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