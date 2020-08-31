import {
  FETCH_PRODUCTS,
} from "../actions/types";


export function productsReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { items: action.payload };
    default:
      return state;
  }
}
