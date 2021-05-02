import React from "react";
import { Header } from "./Header";

interface ConteneurProps {}

export const Conteneur: React.FC<ConteneurProps> = ({children}) => {
    return(
        <>
            <span className="conteneur">
                <div className="content">
                    <Header />
                    {children}
                </div>
            </span>
        </>
    );
};