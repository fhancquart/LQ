export interface StepProps {
    click: string
    handleClick: any
    family?: any
    group?: any
    active: any
    setActive: any
    handleChange: any
    settings: any
    handleChangeButtons: any
    setFamily?: any
    setGroup?: any
}

export interface EditFieldsProps {
    id?: number
    click: string
    handleClick: any
    index: number
    key: number
    active: any
    setActive: any
    handleChange: any
    settings: any
    handleChangeButtons: any
    setstate?: any
}

export interface InputsProps {
    id?: number
    click: string
    index: number
    handleChange: any
    settings: any
    active: any
}

export interface SwitchProps {
    isDark: any
    setIsDark: any
}

// export interface ExtendStepProps extends StepProps {}
