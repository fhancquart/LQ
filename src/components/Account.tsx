import React, { useRef, useState } from "react";
import useOnClick from "../utils/CustomHooks/useOnClick";
import Image from 'next/image';


interface AccountProps {}

export const Account: React.FC<AccountProps> = () => {

    const [showMenu, setShowMenu] = useState(false)

    const ref = useRef<HTMLDivElement>(null); // .profilMenu
    useOnClick(ref, () => setShowMenu(false));

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
                            <li>Déconnexion</li>
                        </ul>
                    </div>
                : ""}
            </div>
        </>
    )
}