import React, { useContext, useReducer} from "react";
import {PrevNextContext} from '../../../utils/CustomHooks/usePrevNextContext'
import {initialState, reducer} from '../../../utils/CustomHooks/usePrevNextFamily'
import { Button } from "../../Button";
import { StepProps } from "../../../utils/Types/interface";
import { EditFields } from "./EditFields";
import { Step4 } from "../step4/Step4";
import { Navigation } from "./Navigation";
import { useGameMutation, useIsGameExistMutation, useUpdateGameMutation } from "../../../generated/graphql";
import { Formik, Form } from "formik";

export const Step3: React.FC<StepProps> = (props) => {
    
    const context = useContext(PrevNextContext);
    const {step, Next} = context;

    const [prevNextFamily, dispatch] = useReducer(reducer, initialState)

    const lastIndex = props.settings.cards.length;

    const [game] = useGameMutation();
    const [isGameExist] = useIsGameExistMutation();
    const [updateGame] = useUpdateGameMutation();

    console.log(props.settings.cards)
    
    return(
        <>  
            {step == 3 || step != 2 ? 
                <Step4 
                    settings={props.settings}
                    group={props.group}
                    family={props.family}
                />
            :                 
                <span className="step3">      
                    <span className="step">2/3</span>              
                    <b><h1>Passons à l'édition</h1></b>
                    <p>Nom du jeu : <b>{props.settings.others.cd_name}</b></p>

                    <p>Pour vos {props.group} familles, renseignez un titre et une couleur. Puis renseignez vos {props.family} Questions <b>(Q)</b>, et Réponses <b>(R)</b></p>
                        <Formik
                            initialValues={{cg_category: "", cg_family: "", cg_number: "", cg_question: "", cg_reponse: ""}}
                            onSubmit={async () => {
                                
                                const exist = await isGameExist({variables: {cg_category: props.idCard}})

                                for (let i = 0; i < props.group; i++) {
                                    for (let j = 0; j < props.family; j++) {
                                        if(exist.data?.isGameExist?.message == "inexistant"){
                                            await game({
                                                variables: {
                                                    input: 
                                                    {
                                                        cg_category: props.idCard,
                                                        cg_family: props.settings.cards[i][0]["family"],
                                                        cg_number: j+1,
                                                        cg_question: props.settings.cards[i][j+1]["question-" + (j+1)],
                                                        cg_reponse: props.settings.cards[i][j+1]["reponse-" + (j+1)]
                                                    }
                                                }
                                            })   
                                        } else{
                                            await updateGame({
                                                variables:{
                                                    cg_category: props.idCard,
                                                    cg_family: props.settings.cards[i][0]["family"],
                                                    cg_number: j+1,
                                                    cg_question: props.settings.cards[i][j+1]["question-" + (j+1)],
                                                    cg_reponse: props.settings.cards[i][j+1]["reponse-" + (j+1)]
                                                }
                                            })
                                        }                                                                         
                                    }                                   
                                }
                                Next()
                            }}
                        >
                        {({isSubmitting}) => ( 
                            <Form>
                                <div className="edition">
                                    {props.settings.cards.map((v:any,i:number) => {
                                        return (
                                        prevNextFamily.count == i ?
                                            <span key={i}>
                                                <div className="top">                                        
                                                    <Navigation 
                                                        prevClick={
                                                            () => prevNextFamily.count != 0 ? 
                                                            dispatch({type: 'decrement'}) 
                                                            : null
                                                        }
                                                        nextClick={
                                                            () => lastIndex != i + 1 ? 
                                                            dispatch({type: 'increment'}) 
                                                            : null
                                                        }
                                                        isInput={true}
                                                        i={i}
                                                        handleChange={props.handleChange}
                                                        settings={props.settings}
                                                        idCard={props.idCard}
                                                        idCreator={props.idCreator}
                                                    />
                                                </div>    
                                                <div className="bottomBloc">
                                                    {Object.keys(props.settings.cards[i]).map((v2:any,i2:number) => {
                                                        return (
                                                            i2 !== 0 &&
                                                            <EditFields 
                                                                id={i}
                                                                setSettings={props.setSettings}
                                                                handleChange={props.handleChange}
                                                                settings={props.settings}
                                                                handleChangeButtons={props.handleChangeButtons}
                                                                index={i2}
                                                                key={i2}
                                                            />
                                                        )
                                                    })}
                                                </div>   
                                            </span>    
                                        : ""
                                        )
                                    })}
                                </div>
                                
                                {isSubmitting ? 
                                    <p>loading</p>
                                :
                                    <Button
                                        text="J'ai terminé"
                                        wButton="big"
                                        cButton="orange"
                                        isImage={false}
                                        link=""
                                        isClick={true}
                                        isSubmit={true}
                                    />
                                }
                            </Form>
                        )}
                    </Formik>
                </span>
            }
        </>
    )
}