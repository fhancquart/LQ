import { Formik, Form } from "formik";
import Image from 'next/image'
import React, { useContext, useEffect, useReducer, useRef, useState} from "react";
import { useCategoryMutation, useGetImagesByTagsMutation, useGetTagsQuery } from "../../../generated/graphql";
import { BackgroundContext } from "../../../utils/CustomHooks/useBackground";
import { PrevNextContext } from "../../../utils/CustomHooks/usePrevNextContext";
import {initialState, reducer} from '../../../utils/CustomHooks/usePrevNextFamily'
import { Button } from "../../Button";
import { Card } from "../../Card";
import { NavigationGroup } from "../step4/NavigationGroup";
import { Step5 } from "../step5/Step5";
import { CustomSelect } from "./CustomSelect";

interface Step4Props{
    settings: any
    group: number
    family: number
    handleChange: any
    idCard: any
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

    const cardColorRef = useRef<any>();
    const [colorFamily, setColorFamily] = useState("");

    useEffect(() => {
        setColorFamily(cardColorRef?.current?.getAttribute("data-color"));
    })

    const [open, setOpen] = useState(false);

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
                    <p>Nom du jeu : <b>{props.settings.others.cd_name}</b></p>
                    <p>Pour chacune de vos <b>{cardTotal}</b> cartes, définissez un visuel approprié</p>

                    <NavigationGroup 
                        prevClickF={() => {
                            prevNextFamily.count != 0 ? dispatch({type: 'decrement'}) : null;
                            setColorFamily(cardColorRef?.current?.getAttribute("data-color"));
                        }}
                        nextClickF={() => {
                            lastIndex != (prevNextFamily.count + 1) ? dispatch({type: 'increment'}) : null;
                            setColorFamily(cardColorRef?.current?.getAttribute("data-color"));
                        }}
                        prevClickC={() => {
                            prevNextCard.count != 0 ? dispatchCard({type: 'decrement'}) : null;
                            setColorFamily(cardColorRef?.current?.getAttribute("data-color"));
                        }}
                        nextClickC={() => {
                            props.family != (prevNextCard.count + 1) ? dispatchCard({type: 'increment'}) : dispatchCard({type:'reinit'});
                            setColorFamily(cardColorRef?.current?.getAttribute("data-color"));
                        }}
                        textF={`(${prevNextFamily.count + 1}/${props.group}) Familles`}
                        textC={`${prevNextCard.count + 1}/${props.family}`}
                    />

                    <CustomSelect 
                        handleChange={props.handleChange}
                        nameSelect={`image-${carte}`}
                        carte={carte}
                        famille={famille}
                        color={colorFamily}
                        idCard={props.idCard}
                        group={props.group}
                        family={props.family}
                        setOpen={setOpen}
                        open={open}
                    />               

                    {props.settings.cards.map((v:any,i:any) => {
                        const color = v[0]["color-" + (i+1)];
                        const family = v[0]["familyName-" + (i+1)];

                        return(
                            prevNextFamily.count == i && //Tri famille
                            <>
                                {Object.keys(props.settings.cards[i]).map((v2:any,i2:number) => {

                                    return (
                                        i2 !== 0 && //suppr. champs color et familyName
                                        (prevNextCard.count + 1) == i2 && //Tri cartes
                                        <>
                                            <Card 
                                                color={color}
                                                family={family}
                                                number={i2}
                                                question={v[i2]["question-" + (i2)]}
                                                reponse={v[i2]["reponse-" + (i2)]}
                                                image={v[i2]["image-" + (i2)]}
                                                cardColorRef={cardColorRef}
                                                setOpen={setOpen}
                                                open={open}
                                            />
                                        </>
                                    )
                                })}    
                            </>
                        )
                    })}

                    
                    <Formik
                        initialValues={{cd_name: "", cd_link: "", cd_resume: ""}}
                        onSubmit={async () => {
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