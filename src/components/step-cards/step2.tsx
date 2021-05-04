import React, { useContext } from "react";
import { Button } from "../Button";
import { Step3 } from "./step3";
import {PrevNextContext} from '../../utils/CustomHooks/usePrevNextContext'



interface Step2Props {}

export const Step2: React.FC<Step2Props> = () => {

    const context = useContext(PrevNextContext);
    const {step, Next} = context;
    
    return(
        <>  
                {step == 2 || step != 1 ? 
                    <Step3 />
                :                 
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
                            click={Next}
                        />
                        
                    </span>
                }
        </>
    )
}