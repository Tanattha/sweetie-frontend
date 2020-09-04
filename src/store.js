import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from 'redux-thunk';
import { productReducers } from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";
import { orderReducers } from "./reducers/orderReducers";
import { reviewReducers } from "./reducers/reviewReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productReducers,
    cart: cartReducers,
    order: orderReducers,
    review: reviewReducers,
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;