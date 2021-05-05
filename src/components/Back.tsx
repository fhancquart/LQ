import { useRouter } from 'next/router'
import React, { useContext } from "react";
import {PrevNextContext} from '../utils/CustomHooks/usePrevNextContext'
import Image from 'next/image'


interface BackProps {}

export const Back: React.FC<BackProps> = () => {

    const context = useContext(PrevNextContext);
    const {step,Prev} = context;
    
    const router = useRouter();
    const isCardProcess = router.pathname === "/cartes";

    let back;
    step == 0 || step == -1 ?  back = () => router.push("/accueil") : back = Prev;

    return(
        <>
            <div className="back" onClick={
                isCardProcess ? back 
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