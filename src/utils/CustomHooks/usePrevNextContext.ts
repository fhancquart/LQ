import { createContext } from "react";

export const initialState = {
    step: 0,
    Next: () => {},
    Prev: () => {},
};

export const PrevNextContext = createContext(initialState)

type stepContent = {
    step: number
}

type setStepContent = {
    type:'increment' | 'decrement';
}

export function reducer(state: stepContent, action: setStepContent) {
    switch (action.type) {
    case 'increment':
        return {step: state.step + 1};
    case 'decrement':
        return {step: state.step - 1};
    default:
        return {step: state.step}
    }
}
