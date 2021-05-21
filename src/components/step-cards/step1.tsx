import React, {useContext } from "react";
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
                    group={props.group}
                    setGroup={props.setGroup}
                    handleChange={props.handleChange}
                    settings={props.settings}
                    setSettings={props.setSettings}
                    handleChangeButtons={props.handleChangeButtons}
                    family={props.family}
                    setFamily={props.setFamily}
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