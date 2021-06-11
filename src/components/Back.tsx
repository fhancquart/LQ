import { useRouter } from 'next/router'
import React, { useContext } from "react";
import {PrevNextContext} from '../utils/CustomHooks/usePrevNextContext'
import Image from 'next/image'


interface BackProps {
    setDesactive:any
}

export const Back: React.FC<BackProps> = (props) => {

    const context = useContext(PrevNextContext);
    const {step,Prev} = context;
    
    const router = useRouter();
    const isCardProcess = router.pathname === "/cartes";

    let back: { (): void; };
    step == 0 || step == -1 ?  back = () => router.push("/") : back = Prev;

    return(
        <>
            <div className="back" onClick={
                isCardProcess ? 
                  () => { 
                    back(); 
                    props.setDesactive(); 
                  } 
                : () => {
                    router.back(); 
                  }
            }>
                <Image 
                    src="/SVG/back.svg" 
                    alt="User"
                    width="30"
                    height="30"
                    className="userico"
                />
            </div>
        </>
    )

}