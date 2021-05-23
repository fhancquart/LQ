export const initialState = {count: 0};

export function reducer(state:any, action:any) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reinit':
      return {count: 0}
    default:
      throw new Error();
  }
}
