import React from "react";
import Image from 'next/image';


interface CardProps {
    color: any
    family: string
    number: number
    image?: number | string
    question: string
    reponse: string
    cardColorRef?: any
    hasEmptyVisual?: boolean
    setOpen?: any
    open?: any
}

export const Card: React.FC<CardProps> = (props) => {
    
    const myLoader = () => {
        return props.image  == undefined ? "" : props.image.toString()
    }

    return (
        <>
            <div className="card" style={{backgroundColor: props.color}} ref={props.cardColorRef} data-color={props.color} key={props.number}>
                <span className="back-family fun-font">{props.family}</span>
                <span className="back-cardnum fun-font">{props.number}</span>             
                <span className="your-visual fun-font">
                    {props.image == undefined || props.image == "" ?  
                        <span className="empty" onClick={() => props.setOpen(props.open == false ? true : false)}>Votre visuel</span> 
                    :
                        <Image 
                            loader={myLoader}
                            src="me.png"
                            alt="Picto"
                            width="120"
                            height="120"
                            className="pictoCard"
                            onClick={() => props.setOpen(props.open == false ? true : false)}
                        />
                    }
                </span>
                <span className="bloc-question">
                    <p>{props.question}</p>
                </span>
                <span className="bloc-reponse">
                    <p>{props.reponse}</p>
                </span>
            </div>
        </>
    )
}