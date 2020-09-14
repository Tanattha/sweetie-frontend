import { CREATE_ORDER, CLEAR_ORDER } from "../actions/types";

export const orderReducers = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { order: action.payload };
    case CLEAR_ORDER:
      return {ordered: action.payload};
    
    default:
      return state;
  }
};
