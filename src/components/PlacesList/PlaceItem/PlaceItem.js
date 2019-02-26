import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import PlaceItemStyles from './PlaceItemStyles';

const styles = StyleSheet.create(PlaceItemStyles);

const PlaceItem = props => {
    let { place, index, selectPlaceHandler, placeImage } = props;

    return (
        <TouchableOpacity onPress={() => selectPlaceHandler(index)}>
            <View style={styles.itemCard}>
                <Image source={placeImage} style={styles.itemCardImage} />
                <Text>{place}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default PlaceItem;