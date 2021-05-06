import React, { Dispatch, SetStateAction, useContext } from "react";
import { Button } from "../Button";
import { Step3 } from "./Step3";
import {PrevNextContext} from '../../utils/CustomHooks/usePrevNextContext'
import { StepProps } from "../../utils/Types/interface";

export const Step2: React.FC<StepProps> = (props) => {

    const context = useContext(PrevNextContext);
    const {step, Next} = context;
    
    return(
        <>  
            {step == 2 || step != 1 ? 
                <Step3 
                    click={props.click}
                    handleClick={props.handleClick}
                    inputName={props.inputName}
                    handleInput={props.handleInput}
                    active={props.active}
                    setActive={props.setActive}
                    handleChange={props.handleChange}
                    settings={props.settings}
                />
            :                 
                <span className="step2">
                    <b><h1>Dites-nous en plus</h1></b>

                    <div className="inputs">
                        <label htmlFor="name">Quel est son nom ?</label>
                        <input type="text" name="name" placeholder="Nom du jeu" onChange={props.handleChange} value={props.settings.name}/>
                        <label htmlFor="name">De combien de familles dispose-t-il ?</label>
                        <input type="number" name="family" placeholder="7 max." onChange={props.handleChange} min="1" max="7" value={props.settings.family}/>
                        <label htmlFor="name">Court résumé de sa thématique</label>
                        <textarea name="summary" placeholder="50 caractères max." maxLength={50} onChange={props.handleChange} value={props.settings.summary}></textarea>
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