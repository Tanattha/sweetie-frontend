import { CREATE_ORDER } from "./types";
import { USERS_URL } from "../config";

export const createOrder = (order) => {
  return (dispatch) => {
    fetch(USERS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: CREATE_ORDER, payload: data });
      });
  };
};
