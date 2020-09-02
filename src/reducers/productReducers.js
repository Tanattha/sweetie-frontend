import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY,
  ORDER_PRODUCTS_BY_PRICE,
} from "../actions/types";

export const productReducers = (state = {}, action) => {
  switch (action.type) {
    case FILTER_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
        filteredItems: action.payload.items,
      };
    case ORDER_PRODUCTS_BY_PRICE:
      return {
        ...state,
        sort: action.payload.sort,
        filteredItems: action.payload.items,
      };
    case FETCH_PRODUCTS:
      return { items: action.payload, filteredItems: action.payload };
    
    default:
      return state;
  }
  
};
