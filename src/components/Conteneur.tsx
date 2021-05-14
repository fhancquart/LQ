import React, { useReducer } from "react";
import { Header } from "./Header";
import {PrevNextContext, initialState, reducer} from '../utils/CustomHooks/usePrevNextContext'
import { SwitchProps } from "../utils/Types/interface";


export const Conteneur: React.FC<SwitchProps> = ({children, ...pageProps}) => {
    
    const [step, setStep] = useReducer(reducer, initialState)
    
    return(
        <>
            <span className="conteneur">
                <div className="content">
                    <PrevNextContext.Provider value={{
                        step: step.step,
                        Next: () => setStep({type: "increment"}),
                        Prev: () => setStep({type: "decrement"}),
                        Reinit: () => setStep({type: "reinit"}),
                    }}>
                        <Header 
                            isDark={pageProps.isDark}
                            setIsDark={pageProps.setIsDark}
                        />
                        {children}
                    </PrevNextContext.Provider>
                </div>
            </span>
        </>
    );
};