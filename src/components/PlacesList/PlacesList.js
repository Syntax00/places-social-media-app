import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import PlaceItem from './PlaceItem/PlaceItem';
import ScreenIntro from '../UI/ScreenIntro/ScreenIntro';

import PlacesListStyles from './PlacesListStyles';

import locationImage from '../../assets/places.png';

const styles = StyleSheet.create(PlacesListStyles);

const PlacesList = props => {
    const { bookmarks, selectPlaceHandler } = props;
    return (
        <FlatList
            style={styles.placesListContainer}
            data={bookmarks}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
                <View style={styles.screenIntroContainer}>
                    <ScreenIntro
                        heading="My Favorite Places"
                        description="This screen contains all the places you bookmarked before and how people reacted to them"
                        icon={locationImage}
                        iconStyle={{ height: 43, marginBottom: 8 }}
                        containerStyle={{ paddingTop: 0, paddingBottom: 30, }}
                    />
                </View>
            )}
            renderItem={(info) => {
                return (<PlaceItem
                    index={info.item.key}
                    selectPlaceHandler={selectPlaceHandler}
                    place={info.item.placeName}
                    placeImage={info.item.placeImage}
                />)
            }}
        />
    );
}

export default PlacesList;