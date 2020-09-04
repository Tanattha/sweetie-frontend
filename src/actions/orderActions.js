import { CREATE_ORDER, CLEAR_CART, CLEAR_ORDER, FETCH_ORDERS } from "./types";
import { USERS_URL,CHECKOUT_URL } from "../config"

export const createOrder = (order) => (dispatch) => {
  fetch(USERS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"  
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ 
        type: CREATE_ORDER, 
        payload: data });
      localStorage.clear("cartItems");
      dispatch({ type: CLEAR_CART });
    });
};

export const clearOrder = (cartItems) => (dispatch) => {
  dispatch({ type: CLEAR_ORDER, payload: cartItems});
};

export const fetchOrders = () => async (dispatch) => {
  const res = await fetch(CHECKOUT_URL);
  const data = await res.json();
  dispatch({
    type: FETCH_ORDERS,
    payload: data,
  });
};
