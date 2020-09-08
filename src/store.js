import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { productReducers } from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";
import { orderReducers } from "./reducers/orderReducers";
import { reviewReducers } from "./reducers/reviewReducers";

const initialState = {};
const store = createStore(
  combineReducers({
    products: productReducers,
    cart: cartReducers,
    order: orderReducers,
    review: reviewReducers,
  }),
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;