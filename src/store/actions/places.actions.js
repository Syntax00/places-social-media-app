export const DELETE_PLACE = 'DELETE_PLACE';
export const START_SUBMIT_PLACE_LOADING = 'START_SUBMIT_PLACE_LOADING';
export const STOP_SUBMIT_PLACE_LOADING = 'STOP_SUBMIT_PLACE_LOADING';
export const SET_PLACES = 'SET_PLACES';

export const addPlace = (placeData) => {
    delete placeData.placeImage.base64
    return (dispatch, getState) => {
        const token = getState().authReducer.token;

        dispatch(startSubmitPlaceLoading());
        fetch(`https://places-app-96f2d.firebaseio.com/places.json`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(placeData),
        })
            .then(res => res.json())
            .then(parsedResponse => {
                dispatch(stopSubmitPlaceLoading());
                dispatch(getPlaces());
            })
            .catch(error => dispatch(stopSubmitPlaceLoading()))
    }
};

export const getPlaces = () => {
    return (dispatch, getState) => {
        const token = getState().authReducer.token;
        console.log('token', token)
        fetch(`https://places-app-96f2d.firebaseio.com/places.json`)
            .then(res => res.json())
            .then(parsedResponse => {
                console.log('parsedResponse[places]', parsedResponse)
                const placesArray = Object.keys(parsedResponse).map(key => parsedResponse[key]);
                dispatch(setPlaces(placesArray));
            })
            .catch(error => console.log('error', error))
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