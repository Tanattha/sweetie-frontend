import { ADD_REVIEW,FETCH_REVIEWS } from "../actions/types"

export const reviewReducers = (state = {}, action) => {
    //console.log("reviewReducers:"+action);
    switch(action.type){
        case FETCH_REVIEWS:
            return { reviews: action.payload };
        case ADD_REVIEW:
            return { reviews: [...state.reviews, action.payload] };
        default: 
            return state;
    }
}
