import React, {useContext } from "react";
import { Button } from "../Button";
import { Step3 } from "./Step3";
import {PrevNextContext} from '../../utils/CustomHooks/usePrevNextContext'
import { StepProps } from "../../utils/Types/interface";

export const Step2: React.FC<StepProps> = (props) => {

    const context = useContext(PrevNextContext);
    const {step, Next} = context;

    const maxValue = (e:any, type:any) => {
        e > 7 ? type(7) : type(e);
    }
    
    return(
        <>  
            {step == 2 || step != 1 ? 
                <Step3 
                    click={props.click}
                    handleClick={props.handleClick}
                    active={props.active}
                    setActive={props.setActive}
                    handleChange={props.handleChange}
                    settings={props.settings}
                    handleChangeButtons={props.handleChangeButtons}
                    family={props.family}
                    group={props.group}
                />
            :                 
                <span className="step2">
                    <span className="step">1/3</span>
                    <b><h1>Dites-nous en plus</h1></b>

                    <div className="inputs">
                        <label htmlFor="name">Quel est son nom ?</label>
                        <input type="text" name="name" placeholder="Nom du jeu" onChange={(e) => {
                            props.handleChange(e, 1)
                        }} value={props.settings.others.name}/>

                        <label htmlFor="familyID">De combien de familles dispose-t-il ?</label>
                        <input type="number" pattern="\d*" name="familyID" placeholder="7 max." onChange={(e) =>{
                            maxValue(e.target.value, props.setGroup);
                            props.handleChange(e, 1);
                        }} min="1" max="7" value={props.group == 0 ? "" : props.group}/>

                        <label htmlFor="family">De combien de cartes dispose chaque famille ?</label>
                        <input type="number" pattern="\d*" name="family" placeholder="7 max." onChange={(e) =>{
                            maxValue(e.target.value, props.setFamily);
                            props.handleChange(e, 1);
                        }} min="1" max="7" value={props.family == 0 ? "" : props.family}/>

                        <label htmlFor="summary">Court résumé de sa thématique</label>
                        <textarea name="summary" placeholder="50 caractères max." maxLength={50} onChange={(e) => {
                            props.handleChange(e, 1)
                        }} value={props.settings.others.summary}></textarea>
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