import { Dispatch, SetStateAction } from "react";

export interface StepProps {
    click: string
    handleClick: any
    inputName: string
    handleInput: any
    active: any
    setActive: any
    handleChange: any
    settings: any
}

export interface EditFieldsProps {
    click: string
    inputName: string
    handleClick: any
    handleInput: any
    index: number
    key: number
    active: any
    setActive: any
    handleChange: any
    settings: any
}

export interface InputsProps {
    click: string
    index: number
    handleChange: any
    settings: any
    active: any
}

// export interface ExtendStepProps extends StepProps {}
