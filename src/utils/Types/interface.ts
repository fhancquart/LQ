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
    inputName: string
    index: number
    setInputs: Dispatch<SetStateAction<string>>
    inputs: string
    setInputs2: Dispatch<SetStateAction<string>>
    inputs2: string
    setInputs3: Dispatch<SetStateAction<string>>
    inputs3: string
    handleChange: any
    settings: any
}

// export interface ExtendStepProps extends StepProps {}
