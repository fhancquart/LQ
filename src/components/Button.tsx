import React, { useState } from "react";
import Image from 'next/image'
import Link from "next/link";

interface ButtonProps {
    text: string;
    wButton: string;
    cButton: string;
    isImage: boolean;
    image?: string | null;
    wImage?: number | null;
    hImage?: number | null;
    link: string;
}

export const Button: React.FC<ButtonProps> = (props) => {

    const [letters, setLetters] = useState<Array<{
        value: string
    }>>([])

    props.text.split("").forEach(character => letters.push({value: character}));

    return(
        <>
          <Link href={props.link}>
            <button className={`${props.wButton}-button ${props.cButton}-button`}>
                <div className="card1">
                {props.isImage ? 
                    <Image 
                        src={`/SVG/${props.image}`}
                        alt="image"
                        width={`${props.wImage}`}
                        height={`${props.hImage}`}
                    />
                : ""}
                </div>
                <span className="maj">{letters[0].value}</span>
                {letters.slice(1).map((letter, key) => {
                    return(
                        <span key={key}>{letter.value}</span>
                    )
                })}
            </button>
          </Link>
        </>
    )
}