import {
    DELETE_PLACE,
    SET_PLACES,
} from '../actions/index';

const initialState = {
    bookmarks: [],
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
        default:
            return state;
    }
}

export default placesReducer;