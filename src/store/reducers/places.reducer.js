import {
    ADD_PLACE,
    DELETE_PLACE,
} from '../actions/index';

const initialState = {
    bookmarks: [],
};

const placesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                bookmarks: state.bookmarks.concat({
                    placeName: action.placeData.placeName,
                    placeImage: action.placeData.placeImage,
                    key: action.placeData.key,
                    location: action.placeData.location,
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                bookmarks: state.bookmarks.filter((bookmark) => bookmark.key !== action.key),
            };
        default:
            return state;
    }
}

export default placesReducer;