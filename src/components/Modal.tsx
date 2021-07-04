import React, { MouseEventHandler, useContext } from "react";
import { ModalContext } from "../utils/CustomHooks/useModalContext";
import Image from 'next/image';

interface ModalProps {
    visible?:boolean
    toggle: MouseEventHandler<HTMLButtonElement>
    title: string
    text: string
}

export const Modal: React.FC<ModalProps> = (props) => {

    const contextModal = useContext(ModalContext);
    const {active} = contextModal;
    
    return(
        active &&
        <>
            <div className="modal">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                {/* <button type="button" onClick={props.toggle}>Fermer</button> */}
            </div>
            <div className="overlay"></div>
        </>
    )

}