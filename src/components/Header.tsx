import React, { useContext, useRef, useState } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {PrevNextContext} from '../utils/CustomHooks/usePrevNextContext'
import { Back } from "./Back";
import { Account } from "./Account";


interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {

    const router = useRouter();
    const isLogOrReg = router.pathname === "/";

    const context = useContext(PrevNextContext);
    const {Reinit} = context;

    return(
        <div className="header">
            {!isLogOrReg ? 
                <Back />
            : ""}
            <div className="logo" onClick={Reinit}>
                <Link href="/accueil">
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
                <Account />
            : ""}
        </div>
    )

}