import React, { useContext, useRef, useState } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import useOnClick from '../utils/CustomHooks/useOnClick'
import {PrevNextContext} from '../utils/CustomHooks/usePrevNextContext'


interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {

    const router = useRouter();
    const isLogOrReg = router.pathname === "/";
    const isCardProcess = router.pathname === "/cartes";

    const [showMenu, setShowMenu] = useState(false)

    const ref = useRef<HTMLDivElement>(null); // .profilMenu
    useOnClick(ref, () => setShowMenu(false));

    const context = useContext(PrevNextContext);
    const {Prev} = context;

    return(
        <div className="header">
            {!isLogOrReg ? 
                    <div className="back" onClick={
                        isCardProcess ? Prev : () => {
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
            : ""}
            <div className="logo">
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
                <div className={"logout " + (showMenu === true && "orange-ico")}>
                    <Image 
                        src="/SVG/user.svg" 
                        alt="User"
                        width="30"
                        height="30"
                        className="userico"
                        onClick={() => {setShowMenu(true)}}
                    />
                    {showMenu === true ? 
                        <div className="profilMenu" ref={ref}>
                            <ul>
                                <li>Déconnexion</li>
                            </ul>
                        </div>
                    : ""}
                </div>
            : ""}
        </div>
    )

}