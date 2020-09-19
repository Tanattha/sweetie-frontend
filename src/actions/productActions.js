import {
  FETCH_PRODUCTS,
  FILTER_PRODUCTS_BY_CATEGORY,
  ORDER_PRODUCTS_BY_PRICE,
} from "./types";
import { PRODUCTS_URL } from "../config";

export const fetchProducts = () => {
  return async (dispatch) => {
    const res = await fetch(PRODUCTS_URL);
    const data = await res.json();
    console.log(data);
    dispatch({
      type: FETCH_PRODUCTS,
      payload: data
    });
  };
};

export const filterProducts = (products, category) => {
  return {
    type: FILTER_PRODUCTS_BY_CATEGORY,
    payload: {
      category: category,
      items: products.filter((x) => x.category.indexOf(category) >= 0),
    },
  };
};

export const sortProducts = (filteredProducts, sort) => {
  const sortedProducts = filteredProducts.slice();
  if (sort === "latest") {
    sortedProducts.sort((a, b) => (a.id > b.id ? 1 : -1));
  }
  if (sort === "lowest") {
    sortedProducts.sort((a, b) => (a.price > b.price ? 1 : -1));
  } else {
    sortedProducts.sort((a, b) => (a.price > b.price ? -1 : 1));
  }
  return {
    type: ORDER_PRODUCTS_BY_PRICE,
    payload: {
      sort: sort,
      items: sortedProducts
    },
  };
};
