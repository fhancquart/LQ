import React from "react";

interface ConteneurProps {}

export const Conteneur: React.FC<ConteneurProps> = ({children}) => {
    return(
        <>
            <span className="conteneur">
                <div>
                    {children}
                </div>
            </span>
        </>
    );
};