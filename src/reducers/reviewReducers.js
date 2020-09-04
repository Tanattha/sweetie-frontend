import { ADD_REVIEW,FETCH_REVIEWS } from "../actions/types"

export const reviewReducers = (state = {}, action) => {
    switch(action.type){
        case FETCH_REVIEWS:
      return { reviews: action.payload };
        case ADD_REVIEW:
            return { reviews: action.payload };
        default: 
            return state;
    }
}

  