import React, { useReducer} from "react";
import {initialState, reducer} from '../../../utils/CustomHooks/usePrevNextFamily'
import Image from 'next/image';

interface Step4Props{
    settings: any
    group: number
    family: number
}

export const Step4: React.FC<Step4Props> = (props) => {

    const cardTotal = (props.group * props.family);
    const lastIndex = props.settings.cards.length;


    const [prevNextFamily, dispatch] = useReducer(reducer, initialState)
    const [prevNextCard, dispatchCard] = useReducer(reducer, initialState)


    return(
        <>
            <span className="step4">      
                    <span className="step">3/3</span>    
                    <b><h1>Attribuez vos visuels</h1></b>
                    <p>Nom du jeu : <b>{props.settings.others.name}</b></p>
                    <p>Pour chacune de vos cartes, définissez un visuel approprié</p>

                    <select name="pictures">
                        <option value="" selected disabled>Choisissez une catégorie</option>
                        <option value="pic1">1</option>
                        <option value="pic2">2</option>
                        <option value="pic3">3</option>
                    </select>

                    

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

                                            <div className="align-flex">
                                                <span className="prevSsButton" onClick={() => prevNextFamily.count != 0 ? dispatch({type: 'decrement'}) : null}>
                                                    <Image 
                                                        src="/SVG/arrow.svg" 
                                                        alt="Arrow"
                                                        width="30"
                                                        height="30"
                                                        className="arrow"
                                                    />
                                                </span>

                                                <p className="numberCard"><span>({prevNextFamily.count + 1}</span>/{props.group}) Famille <b>{family}</b></p>

                                                <span className="nextSsButton" onClick={() => lastIndex != i+1 ? dispatch({type: 'increment'}) : null}>
                                                    <Image 
                                                        src="/SVG/arrow.svg" 
                                                        alt="Arrow"
                                                        width="30"
                                                        height="30"
                                                        className="arrow"
                                                    />
                                                </span>
                                            </div>
                                
                                            <div className="card" style={{backgroundColor: color}}>
                                                <span className="back-family fun-font">{family}</span>
                                                <span className="back-cardnum fun-font">{i2}</span>
                                                <span className="your-visual fun-font">Votre<br/>visuel</span>
                                                <span className="bloc-question">
                                                    <p>{v[i2]["question-" + (i2)]}</p>
                                                </span>
                                            </div>

                                            <div className="align-flex">
                                                <span className="prevSsButton" onClick={() => prevNextCard.count != 0 ? dispatchCard({type: 'decrement'}) : null}>
                                                    <Image 
                                                        src="/SVG/arrow.svg" 
                                                        alt="Arrow"
                                                        width="30"
                                                        height="30"
                                                        className="arrow"
                                                    />
                                                </span>

                                                <p className="numberCard"><span>Carte {prevNextCard.count + 1}</span>/<b>{props.family}</b></p>

                                                <span className="nextSsButton" onClick={() => lastIndex != (i2 + 1) ? dispatchCard({type: 'increment'}) : dispatchCard({type:'reinit'})}>
                                                    <Image 
                                                        src="/SVG/arrow.svg" 
                                                        alt="Arrow"
                                                        width="30"
                                                        height="30"
                                                        className="arrow"
                                                    />
                                                </span>
                                            </div>

                                        </>
                                    )
                                })}                


                                
                                

                            </>

                        )
                    })}

            </span>
        </>
    )
}