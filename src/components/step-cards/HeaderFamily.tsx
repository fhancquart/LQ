import { ColorPicker } from "./ColorPicker";
import Image from 'next/image';

interface HeaderProps{
    active: any
    i: number
    handleChange: any
    settings: any
    dispatch:any
    prevNextFamily: any
}

export const HeaderFamily: React.FC<HeaderProps> = (props) => {

    const lastIndex = props.active.length;
    
    return(
        <>
            <span className="prevSsButton" onClick={() => props.prevNextFamily.count != 0 ? props.dispatch({type: 'decrement'}) : null}>
                <Image 
                    src="/SVG/arrow.svg" 
                    alt="Arrow"
                    width="25"
                    height="25"
                    className="arrow"
                />
            </span>
            <ColorPicker index={props.i} handleChange={props.handleChange} settings={props.settings} />
            <span className="nextSsButton" onClick={() => lastIndex != props.i + 1 ? props.dispatch({type: 'increment'}) : null}>
                <Image 
                    src="/SVG/arrow.svg" 
                    alt="Arrow"
                    width="25"
                    height="25"
                    className="arrow"
                />
            </span>
        </>
    )
}