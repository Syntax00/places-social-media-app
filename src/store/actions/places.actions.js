export const ADD_PLACE = 'ADD_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';
export const START_SUBMIT_PLACE_LOADING = 'START_SUBMIT_PLACE_LOADING';
export const STOP_SUBMIT_PLACE_LOADING = 'STOP_SUBMIT_PLACE_LOADING';

export const addPlace = (placeData) => {
    delete placeData.placeImage.base64
    return dispatch => {
        dispatch(startSubmitPlaceLoading());
        fetch("https://places-app-96f2d.firebaseio.com/places.json", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(placeData),
        })
        .catch(error => dispatch(stopSubmitPlaceLoading()))
        .then(res => res.json())
        .then(parsedResponse => dispatch(stopSubmitPlaceLoading()))
    }
};

export const startSubmitPlaceLoading = () => ({
    type: START_SUBMIT_PLACE_LOADING,
});

export const stopSubmitPlaceLoading = () => ({
    type: STOP_SUBMIT_PLACE_LOADING,
});

export const deletePlace = (selectedKey) => ({
    type: DELETE_PLACE,
    key: selectedKey,
});