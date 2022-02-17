import { useRouter } from 'next/router'
import React, { useContext } from "react";
import {PrevNextContext} from '../utils/CustomHooks/usePrevNextContext'
import Image from 'next/image'
import { EditModeContext } from '../utils/CustomHooks/useEditModeContext';


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

    const contextEditMode = useContext(EditModeContext);
    const {editMode} = contextEditMode;

    return(
        <>
            <div className="back" onClick={
                isCardProcess ? 
                  () => { 
                    console.log(editMode)
                    if(step == 2 && editMode){
                        alert('Désolé, vous ne pouvez pas revenir sur les informations principales durant l\'édition d\'un jeu en cours. Pour cela vous devez créer un nouveau jeu.')
                    } else{
                        back(); 
                        props.setDesactive(); 
                    }
                    
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