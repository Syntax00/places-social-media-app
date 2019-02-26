export const ADD_PLACE = 'ADD_PLACE';
export const DELETE_PLACE = 'DELETE_PLACE';

export const addPlace = (placeData) => ({
    type: ADD_PLACE,
    placeData,
});

export const deletePlace = (selectedKey) => ({
    type: DELETE_PLACE,
    key: selectedKey,
});