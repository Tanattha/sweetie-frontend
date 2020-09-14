import { CREATE_ORDER } from "../actions/types";

export const orderReducers = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { order: action.payload };
    default:
      return state;
  }
};
