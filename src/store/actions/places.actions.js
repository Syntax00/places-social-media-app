export const DELETE_PLACE = 'DELETE_PLACE';
export const START_SUBMIT_PLACE_LOADING = 'START_SUBMIT_PLACE_LOADING';
export const STOP_SUBMIT_PLACE_LOADING = 'STOP_SUBMIT_PLACE_LOADING';
export const SET_PLACES = 'SET_PLACES';

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
            .then(parsedResponse => {
                dispatch(stopSubmitPlaceLoading());
                dispatch(getPlaces());
            })
    }
};

export const getPlaces = () => {
    return dispatch => {
        fetch("https://places-app-96f2d.firebaseio.com/places.json")
            .catch(error => console.log('error', error))
            .then(res => res.json())
            .then(parsedResponse => {
                const placesArray = Object.keys(parsedResponse).map(key => parsedResponse[key]);
                dispatch(setPlaces(placesArray));
            })
    }
}

export const startSubmitPlaceLoading = () => ({
    type: START_SUBMIT_PLACE_LOADING,
});

export const stopSubmitPlaceLoading = () => ({
    type: STOP_SUBMIT_PLACE_LOADING,
});

export const setPlaces = (places) => ({
    type: SET_PLACES,
    places,
})

export const deletePlace = (selectedKey) => ({
    type: DELETE_PLACE,
    key: selectedKey,
});