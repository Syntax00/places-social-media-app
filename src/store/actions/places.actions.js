export const ADD_PLACE = 'ADD_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';

export const addPlace = (placeData) => {
    delete placeData.placeImage.base64
    return dispatch => {
        fetch("https://places-app-96f2d.firebaseio.com/places.json", {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(placeData),
        })
        .catch(error => console.error(error))
        .then(res => res.json())
        .then(parsedResponse => console.log("parsedResponse", parsedResponse))
    }
};

// ({
//     type: ADD_PLACE,
//     placeData,
// });

export const deletePlace = (selectedKey) => ({
    type: DELETE_PLACE,
    key: selectedKey,
});