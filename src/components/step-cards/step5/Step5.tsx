import React from "react";
import { useCarousel } from "../../../utils/CustomHooks/useCarousel";
import { Button } from "../../Button";
import { Card } from "../../Card";

interface Step5Props{
    settings: any
    cardTotal: number
}

export const Step5: React.FC<Step5Props> = (props) => {    

    const length = props.cardTotal;
    const [, , handlers, style] = useCarousel(length, 1000);

    return(
        <>
            <span className="step5">
                <b><h1>Félicitations !</h1></b>
                <p>Votre jeu de carte <b>{props.settings.others.name}</b> est maintenant terminé et prêt à être joué !</p>
                
                <div className="slider" {...handlers} style={style}>
                    {props.settings.cards.map((v:any,i:any) => {
                        const color = v[0]["color-" + (i+1)];
                        const family = v[0]["familyName-" + (i+1)];
                        return(
                            <>
                                {Object.keys(props.settings.cards[i]).map((v2:any,i2:number) => {
                                    return (
                                        i2 !== 0 &&
                                        length > 0 &&
                                        <>
                                            <Card 
                                                color={color}
                                                family={family}
                                                number={i2}
                                                hasEmptyVisual={false}
                                                question={v[i2]["question-" + (i2)]}
                                            />
                                        </>
                                    )
                                })}
                            </>
                        )
                    })}
                </div>

                <Button
                    text="Jouer !"
                    wButton="big"
                    cButton="orange"
                    isImage={false}
                    link=""
                    isClick={true}
                />

                
            </span>
        </>
    )
}