import React, { useContext } from "react";
import { Button } from "../Button";
import { Step2 } from "./step2";
import {PrevNextContext} from '../../utils/CustomHooks/usePrevNextContext'

interface Step1Props {}

export const Step1: React.FC<Step1Props> = () => {

    const context = useContext(PrevNextContext);
    const {step, Next} = context;

    return(
        <>  
             {step == 1 || step != 0 ? 
                <Step2 />
            : 
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
                        click={Next}
                    />
                </span>
            } 
        </>
    )
}