import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import PlaceItem from './PlaceItem/PlaceItem';

import PlacesListStyles from './PlacesListStyles';

const styles = StyleSheet.create(PlacesListStyles);

const PlacesList = props => {
    const { bookmarks, selectPlaceHandler } = props;

    return (
        <FlatList
            style={styles.placesListContainer}
            data={bookmarks}
            renderItem={(info) => <PlaceItem
                index={info.item.key}
                selectPlaceHandler={selectPlaceHandler}
                place={info.item.placeName}
                placeImage={info.item.placeImage}
            />}
        />
    );
}

export default PlacesList;