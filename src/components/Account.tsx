import React, { useRef, useState } from "react";
import useOnClick from "../utils/CustomHooks/useOnClick";
import Image from 'next/image';
import { Switch } from "./Switch";
import { SwitchProps } from "../utils/Types/interface";
import { useLogoutMutation } from "../generated/graphql";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";

export const Account: React.FC<SwitchProps> = (props) => {

    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)

    const ref = useRef<HTMLDivElement>(null); // .profilMenu
    useOnClick(ref, () => setShowMenu(false));

    const [logout, {loading: logoutFetching}] = useLogoutMutation();

    const apolloClient = useApolloClient();

    return(
        <>
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
                            <li className="switchDarkMode"><Switch isDark={props.isDark} setIsDark={props.setIsDark} /></li>
                            <li 
                                onClick={async () => { 
                                    await logout(); 
                                    await apolloClient.resetStore();
                                }} 
                                className="out"
                            >Déconnexion</li>
                        </ul>
                    </div>
                : ""}
            </div>
        </>
    )
}