import React, { useContext } from "react";
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {PrevNextContext} from '../utils/CustomHooks/usePrevNextContext'
import { Back } from "./Back";
import { Account } from "./Account";
import { SwitchProps } from "../utils/Types/interface";
import { BackgroundContext } from "../utils/CustomHooks/useBackground";

export const Header: React.FC<SwitchProps> = (props) => {

    const router = useRouter();
    const isLogOrReg = router.pathname === "/login";

    const context = useContext(PrevNextContext);
    const {Reinit} = context;

    const view = props.isDark ? "DARK" : "LIGHT";

    const contextBackground = useContext(BackgroundContext);
    const {setDesactive} = contextBackground;

    return(
        <div className="header">
            {!isLogOrReg ? 
                <Back setDesactive={setDesactive} />
            : ""}
            <div className="logo" onClick={() => {Reinit(); setDesactive()}}>
                <Link href="/"> 
                        <Image 
                            src={`/SVG/${view}/logo.svg`}
                            alt="Logo"
                            width="160"
                            height="90"
                            className="logoico"
                        />
                </Link>
            </div>
            {!isLogOrReg ? 
                <Account 
                    isDark={props.isDark}
                    setIsDark={props.setIsDark}
                />
            : ""}
        </div>
    )

}