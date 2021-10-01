import React from "react";
import Image from 'next/image';

interface NavigationGroupProps{
    prevClickF: any
    nextClickF: any
    prevClickC: any
    nextClickC: any
    textF: string
    textC: string
}

export const NavigationGroup: React.FC<NavigationGroupProps> = (props) => {

    return (           
        <> 

            <span className="prevSsButton doubleNavigationgroup" onClick={props.prevClickF}>
                <Image 
                    src="/SVG/arrow.svg" 
                    alt="Arrow"
                    width="30"
                    height="30"
                    className="arrow"
                />
                <Image 
                    src="/SVG/arrow.svg" 
                    alt="Arrow"
                    width="30"
                    height="30"
                    className="arrow"
                />
            </span>

           <span className="prevSsButton navigationgroup" onClick={props.prevClickC}>
                <Image 
                    src="/SVG/arrow.svg" 
                    alt="Arrow"
                    width="30"
                    height="30"
                    className="arrow"
                />
            </span>

            <p className="navigationgroupText">{props.textC}</p>
            

            <span className="nextSsButton navigationgroup" onClick={props.nextClickC}>
                <Image 
                    src="/SVG/arrow.svg" 
                    alt="Arrow"
                    width="30"
                    height="30"
                    className="arrow"
                />
            </span>

            <span className="nextSsButton doubleNavigationgroup" onClick={props.nextClickF}>
                <Image 
                    src="/SVG/arrow.svg" 
                    alt="Arrow"
                    width="30"
                    height="30"
                    className="arrow"
                />
                <Image 
                    src="/SVG/arrow.svg" 
                    alt="Arrow"
                    width="30"
                    height="30"
                    className="arrow"
                />
            </span>
        </>            
    )
}