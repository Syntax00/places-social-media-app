import {
    DELETE_PLACE,
    SET_PLACES,
    PLACE_SUBMIT_STATUS,
} from '../actions/index';

const initialState = {
    bookmarks: [],
    submitPlaceStatus: null,
};

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PLACE:
            return {
                ...state,
                bookmarks: state.bookmarks.filter((bookmark) => bookmark.key !== action.key),
            };
        case SET_PLACES:
            return {
                ...state,
                bookmarks: [...action.places],
            };
        case PLACE_SUBMIT_STATUS:
            return {
                ...state,
                submitPlaceStatus: action.status,
            };
        default:
            return state;
    }
}

export default placesReducer;