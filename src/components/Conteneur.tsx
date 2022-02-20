import React, { useContext, useReducer } from "react";
import { Header } from "./Header";
import {PrevNextContext, initialState, reducer} from '../utils/CustomHooks/usePrevNextContext'
import {EditModeContext, initialStateEditMode, reducerEditMode} from '../utils/CustomHooks/useEditModeContext'
import { SwitchProps } from "../utils/Types/interface";
import { BackgroundContext } from "../utils/CustomHooks/useBackground";


export const Conteneur: React.FC<SwitchProps> = ({children, ...pageProps}) => {
    
    const [step, setStep] = useReducer(reducer, initialState);
    const [editMode, setEditMode] = useReducer(reducerEditMode, initialStateEditMode);

    const contextBackground = useContext(BackgroundContext);
    const {active} = contextBackground;
    
    return(
        <>
            <span className="conteneur">
                <div className={`content ${active ? "blurred" : "" }`}>
                    <PrevNextContext.Provider value={{
                        step: step.step,
                        Next: () => setStep({type: "increment"}),
                        Next2: () => setStep({type: "increment++"}),
                        Prev: () => setStep({type: "decrement"}),
                        Reinit: () => setStep({type: "reinit"})

                    }}>
                        <EditModeContext.Provider value={{
                            editMode: editMode.editMode,
                            isEditmode: () => setEditMode({type: "isEdit"}),
                            noEditMode: () => setEditMode({type: "noEdit"})

                        }}>
                            <Header 
                                isDark={pageProps.isDark}
                                setIsDark={pageProps.setIsDark}
                            />
                            {children}
                        </EditModeContext.Provider>
                    </PrevNextContext.Provider>
                </div>
            </span>
        </>
    );
};