import { createContext, useContext } from "react";

export type backContent = {
    backComponent: object
    setBackComponent:(c: object) => void
}

export type stepContent = {
    nextStep: number
    setNextStep:(c: object) => void
}

export const backGlobalContext = createContext<backContent>({
    backComponent: {step: Number, boolean: false},
    setBackComponent: () => {}
});

export const stepGlobalContext = createContext<stepContent>({
    nextStep: 0,
    setNextStep: () => {}
});

export const useBackContext = () => useContext(backGlobalContext);
export const useStepContext = () => useContext(stepGlobalContext);
