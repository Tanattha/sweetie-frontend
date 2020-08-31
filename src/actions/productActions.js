import { FETCH_PRODUCTS } from "./types";
import { PRODUCTS_URL } from "../config"


export const fetchProducts = () => dispatch => {
  fetch(PRODUCTS_URL)
    .then(response => response.json())
    .then(jsondata => console.log(jsondata))
    .then(products => {
      dispatch({
          type: FETCH_PRODUCTS,
          payload: products
      })
  })
}

