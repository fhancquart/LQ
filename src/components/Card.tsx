import React from "react";

interface CardProps {
    color: any
    family: string
    number: number
    hasVisual: boolean
    question: string
}

export const Card: React.FC<CardProps> = (props) => {
    return (
        <>
            <div className="card" style={{backgroundColor: props.color}}>
                <span className="back-family fun-font">{props.family}</span>
                <span className="back-cardnum fun-font">{props.number}</span>
                {props.hasVisual ? 
                    <span className="your-visual fun-font">Votre<br/>visuel</span>
                : ""}
                <span className="bloc-question">
                    <p>{props.question}</p>
                </span>
            </div>
        </>
    )
}