import { Formik, Form } from "formik";
import React, { useContext, useReducer, useState} from "react";
import { useCategoryMutation } from "../../../generated/graphql";
import { BackgroundContext } from "../../../utils/CustomHooks/useBackground";
import { PrevNextContext } from "../../../utils/CustomHooks/usePrevNextContext";
import {initialState, reducer} from '../../../utils/CustomHooks/usePrevNextFamily'
import { Button } from "../../Button";
import { Card } from "../../Card";
import { Navigation } from "../step3/Navigation";
import { Step5 } from "../step5/Step5";

interface Step4Props{
    settings: any
    group: number
    family: number
    handleChange: any
}

export const Step4: React.FC<Step4Props> = (props) => {

    const context = useContext(PrevNextContext);
    const {step,Next} = context;

    const cardTotal = (props.group * props.family);
    const lastIndex = props.settings.cards.length;


    const [prevNextFamily, dispatch] = useReducer(reducer, initialState)
    const [prevNextCard, dispatchCard] = useReducer(reducer, initialState)

    const contextBackground = useContext(BackgroundContext);
    const {setActive} = contextBackground;

    const [category] = useCategoryMutation();

    const famille = prevNextFamily.count + 1;
    const carte = prevNextCard.count + 1;

    return(
        <>
            {step == 4 || step != 3 ? 
                <Step5 
                    settings={props.settings}
                    cardTotal={cardTotal}
                />
            :  
                <span className="step4">      
                    <span className="step">3/3</span>    
                    <b><h1>Attribuez vos visuels</h1></b>
                    <p>Nom du jeu : <b>{props.settings.others.name}</b></p>
                    <p>Pour chacune de vos <b>{cardTotal}</b> cartes, définissez un visuel approprié</p>

                    <select name={`image-${carte}`} onChange={(e) => {props.handleChange(e,2, carte, famille-1)}}>
                        <option value="0" selected disabled>Choisissez une catégorie</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>

                    {props.settings.cards.map((v:any,i:any) => {
                        const color = v[0]["color-" + (i+1)];
                        const family = v[0]["familyName-" + (i+1)];
                        const lastIndexCard = v.length;

                        return(
                            prevNextFamily.count == i && //Tri famille
                            <>
                                {Object.keys(props.settings.cards[i]).map((v2:any,i2:number) => {
                                    return (
                                        i2 !== 0 && //suppr. champs color et familyName
                                        (prevNextCard.count + 1) == i2 && //Tri cartes
                                        <>

                                            <div className="align-flex">
                                                <Navigation 
                                                    prevClick={
                                                        () => prevNextFamily.count != 0 ? dispatch({type: 'decrement'}) : null
                                                        }
                                                    nextClick={
                                                        () => lastIndex != (i+1) ? dispatch({type: 'increment'}) : null
                                                        }
                                                    isInput={false}
                                                    text={`(${prevNextFamily.count + 1}/${props.group}) Familles ${family}`}
                                                />
                                            </div>

                                            <Card 
                                                color={color}
                                                family={family}
                                                number={i2}
                                                question={v[i2]["question-" + (i2)]}
                                                image={v[i2]["image-" + (i2)]}
                                            />

                                            <div className="align-flex">
                                                <Navigation 
                                                    prevClick={
                                                        () => prevNextCard.count != 0 ? dispatchCard({type: 'decrement'}) : null
                                                    }
                                                    nextClick={
                                                        () => lastIndexCard != (i2 + 1) ? dispatchCard({type: 'increment'}) : dispatchCard({type:'reinit'})
                                                    }
                                                    isInput={false}
                                                    text={`Carte ${prevNextCard.count + 1}/${props.family}`}
                                                />
                                            </div>                                            

                                        </>
                                    )
                                })}    
                            </>
                        )
                    })}

                    
                    <Formik
                        initialValues={{cd_name: "", cd_link: "", cd_resume: ""}}
                        onSubmit={async () => {
                            const {errors} = await category({variables: {input: {
                                cd_name: props.settings.others.cd_name,
                                cd_link: props.settings.others.cd_name,
                                cd_resume: props.settings.others.cd_resume
                            }}}) 
                            Next();
                            setActive();
                        }}
                    >
                        {({isSubmitting}) => ( 
                            <Form>
                                <Button
                                    text="J'ai terminé"
                                    wButton="big"
                                    cButton="orange"
                                    isImage={false}
                                    link=""
                                    isClick={true}
                                    isSubmit={true}
                                />
                            </Form>
                        )}
                    </Formik>

                </span>
            }
        </>
    )
}