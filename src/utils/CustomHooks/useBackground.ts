import { createContext, useState } from "react";

export const initialState = {
    active: false,
    setActive: () => {},
    setDesactive: () => {},
};

export const BackgroundContext = createContext(initialState)

type activeType = {
    active: boolean
}

type setActiveType = {
    type: 'active' | 'desactive';
}

export function reducer(state: activeType, action: setActiveType) {
    switch (action.type) {
    case 'active':
        return {active: true};
    case 'desactive':
        return {active: false};
    default:
        return {active: false}
    }
}