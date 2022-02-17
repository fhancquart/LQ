import { createContext } from "react";

export const initialStateEditMode = {
  editMode: false,
  isEditmode: () => {},
  noEditMode: () => {}
};

export const EditModeContext = createContext(initialStateEditMode)

type stepContent = {
  editMode: boolean
}

type setStepContent = {
    type:'isEdit' | 'noEdit';
}

export function reducerEditMode(state: stepContent, action: setStepContent) {
  switch (action.type) {
    case 'isEdit':
      return {editMode: true};
    case 'noEdit':
      return {editMode: false};
    default:
      return {editMode: false};
  }
}
