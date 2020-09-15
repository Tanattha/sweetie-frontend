import { ADD_REVIEW, FETCH_REVIEWS } from "./types";
import { REVIEWS_URL } from "../config";

export const fetchReviews = () => {
  return async (dispatch) => {
    const res = await fetch(REVIEWS_URL);
    const data = await res.json();

    dispatch({
      type: FETCH_REVIEWS,
      payload: data,
    });
  };
};

export const addReview = (review) => {
  return (dispatch) => {
    fetch(REVIEWS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((review) => {
        dispatch({
          type: ADD_REVIEW,
          payload: review,
        });
      });
  };
};
