import React from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface ConteneurProps {}

export const Conteneur: React.FC<ConteneurProps> = ({children}) => {

    const router = useRouter();
    const isLogOrReg = router.pathname === "/";

    return(
        <>
            <span className="conteneur">
                <div className="content">
                    <div className="header">
                        {!isLogOrReg ? 
                            <div className="back" onClick={() => router.back()}>
                                <Image 
                                    src="/SVG/back.svg" 
                                    alt="User"
                                    width="30"
                                    height="30"
                                    className="userico"
                                />
                            </div>
                        : ""}
                        <div className="logo">
                            <Link href="/">
                                <Image 
                                    src="/SVG/logo.svg" 
                                    alt="Logo"
                                    width="160"
                                    height="90"
                                    className="logoico"
                                />
                            </Link>
                        </div>
                        {!isLogOrReg ? 
                            <div className="user">
                                <Image 
                                    src="/SVG/user.svg" 
                                    alt="User"
                                    width="30"
                                    height="30"
                                    className="userico"
                                />
                            </div>
                        : ""}
                    </div>
                    {children}
                </div>
            </span>
        </>
    );
};