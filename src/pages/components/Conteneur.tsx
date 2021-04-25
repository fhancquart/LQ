import React from "react";
import Image from 'next/image'

interface ConteneurProps {}

export const Conteneur: React.FC<ConteneurProps> = ({children}) => {
    return(
        <>
            <span className="conteneur">
                <div className="content">
                    <Image 
                        src="/SVG/logo.svg" 
                        alt="Logo"
                        width="160"
                        height="90"
                        className="logo"
                    />
                    {children}
                </div>
            </span>
        </>
    );
};