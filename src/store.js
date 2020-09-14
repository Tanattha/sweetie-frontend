import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import { productReducers } from "./reducers/productReducers";
import { cartReducers } from "./reducers/cartReducers";
import { orderReducers } from "./reducers/orderReducers";
import { reviewReducers } from "./reducers/reviewReducers";

const store = createStore(
  combineReducers({
    products: productReducers,
    cart: cartReducers,
    order: orderReducers,
    review: reviewReducers,
  }),
  compose(applyMiddleware(thunk))
)
export default store;