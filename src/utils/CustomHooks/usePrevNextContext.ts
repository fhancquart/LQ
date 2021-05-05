import { createContext } from "react";

export const initialState = {
    step: 0,
    Next: () => {},
    Prev: () => {},
    Reinit: () => {},
};

export const PrevNextContext = createContext(initialState)

type stepContent = {
    step: number
}

type setStepContent = {
    type:'increment' | 'decrement' | 'reinit';
}

export function reducer(state: stepContent, action: setStepContent) {
    switch (action.type) {
    case 'increment':
        return {step: state.step + 1};
    case 'decrement':
        return {step: state.step - 1};
    case 'reinit':
        return {step: 0};
    default:
        return {step: state.step}
    }
}
