import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types";

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
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

    dispatch({
      type: ADD_TO_CART,
      payload: { cartItems },
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
};

export const removeFromCart = (product) => {
  return (dispatch, getState) => {
    const cartItems = getState()
      .cart.cartItems.slice()
      .filter((item) => item.id !== product.id);

    dispatch({
      type: REMOVE_FROM_CART,
      payload: { cartItems },
    });

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
};

export const clearCart = () => {
  return (dispatch) => {
    const cartItems = [];
    dispatch({
      type: CLEAR_CART,
      payload: { cartItems },
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
};
