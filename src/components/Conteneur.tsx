import React, { useState } from "react";
import { Header } from "./Header";
import {backGlobalContext} from '../utils/CustomHooks/useGlobalContext'


interface ConteneurProps {}

export const Conteneur: React.FC<ConteneurProps> = ({children}) => {

    const [backComponent, setBackComponent] = useState<Object>({step: 0, boolean: false});

    return(
        <>
            <span className="conteneur">
                <div className="content">
                    <backGlobalContext.Provider value={{backComponent, setBackComponent}}>
                        <Header />
                        {children}
                    </backGlobalContext.Provider>
                </div>
            </span>
        </>
    );
};