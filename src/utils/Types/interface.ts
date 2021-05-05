import { Dispatch, SetStateAction } from "react";

export interface StepProps {
    click: string
    setClick: Dispatch<SetStateAction<string>>
    inputName: string
    setInputName: Dispatch<SetStateAction<string>>
}

export interface EditFieldsProps {
    click: string
    inputName: string
    handleClick: any
    handleInput: any
    index: number
    key: number
}

// export interface ExtendStepProps extends StepProps {}
