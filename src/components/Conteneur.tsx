import React, { useReducer, useState } from "react";
import { Header } from "./Header";
import {PrevNextContext, initialState, reducer} from '../utils/CustomHooks/usePrevNextContext'


interface ConteneurProps {}

export const Conteneur: React.FC<ConteneurProps> = ({children}) => {
    
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
                        <Header />
                        {children}
                    </PrevNextContext.Provider>
                </div>
            </span>
        </>
    );
};