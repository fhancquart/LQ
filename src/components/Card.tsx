import React from "react";

interface CardProps {
    color: any
    family: string
    number: number
    image: number
    question: string
}

export const Card: React.FC<CardProps> = (props) => {
    console.log(props.image == 0)
    return (
        <>
            <div className="card" style={{backgroundColor: props.color}} key={props.number}>
                <span className="back-family fun-font">{props.family}</span>
                <span className="back-cardnum fun-font">{props.number}</span>                
                <span className="your-visual fun-font">{`${props.image == 0 ?  "Votre visuel" : props.image}`}</span>
                <span className="bloc-question">
                    <p>{props.question}</p>
                </span>
                <span className="bloc-reponse">
                    <p></p>
                </span>
            </div>
        </>
    )
}