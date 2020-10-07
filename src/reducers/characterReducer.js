import { FETCH_CLASSES_START, FETCH_CLASSES_SUCCESS } from "../actions"

const intialState = {
    classes: [],
    isLoading: false
}

export const characterReducer = (state = intialState, action) => {
    switch(action.type) {
        case FETCH_CLASSES_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_CLASSES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                classes: action.payload.results
            }
        default:
            return state
    }
}
