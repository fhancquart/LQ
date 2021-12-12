import React from "react";
import Image from 'next/image';


interface CardProps {
    color: any
    family: string
    visual: string | undefined
    number: number
    image?: number
    question: string
    cardColorRef?: any
    hasEmptyVisual?: boolean
}

export const Card: React.FC<CardProps> = (props) => {
    
    const myLoader = () => {
        return props.visual == undefined ? "" : props.visual
    }

    return (
        <>
            <div className="card" style={{backgroundColor: props.color}} ref={props.cardColorRef} data-color={props.color} key={props.number}>
                <span className="back-family fun-font">{props.family}</span>
                <span className="back-cardnum fun-font">{props.number}</span>                
                <span className="your-visual fun-font">{`${props.image == 0 ?  "Votre visuel" :
                    <Image 
                        loader={myLoader}
                        src="me.png"
                        alt="Picto"
                        width="50"
                        height="50"
                        className="pictoCard"
                    />
                }`}</span>
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