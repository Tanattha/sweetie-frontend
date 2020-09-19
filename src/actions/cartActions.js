import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types";
import store from "../store";

export const addToCart = (product) => {
  const cartItems = store.getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach((item) => {
    if (item.id === product.id) {
      alreadyExists = true;
      item.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return {
    type: ADD_TO_CART,
    payload: { cartItems }
  };
};


export const removeFromCart = (product) => {
  const cartItems = store.getState().cart.cartItems.slice().filter((item) => item.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return {
    type: REMOVE_FROM_CART,
    payload: { cartItems }
  };
};

export const clearCart = () => {
  const cartItems = [];
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return {
    type: CLEAR_CART,
    payload: { cartItems }
  };
};
