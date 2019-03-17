import { START_SUBMIT_PLACE_LOADING, STOP_SUBMIT_PLACE_LOADING } from '../actions/index';

const initialState = {
    submitPlaceLoading: false,
};

const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_SUBMIT_PLACE_LOADING:
            return {
                ...state,
                submitPlaceLoading: true,
            };
        case STOP_SUBMIT_PLACE_LOADING:
            return {
                ...state,
                submitPlaceLoading: false,
            };
        default:
            return state;
    }
}

export default uiReducer;