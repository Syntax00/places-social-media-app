import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import PlaceItem from './PlaceItem/PlaceItem';
import ScreenIntro from '../UI/ScreenIntro/ScreenIntro';
import CustomButton from '../UI/CustomButton/CustomButton';

import PlacesListStyles from './PlacesListStyles';

import starsIcon from '../../assets/stars.png';

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
                        icon={starsIcon}
                        iconStyle={{ height: 100, width: 100, marginBottom: 8 }}
                        containerStyle={{ paddingTop: 10, paddingBottom: 20, }}
                    >
                        <CustomButton
                            pressAction={() => {
                                props.navigator.push({
                                    screen: 'places-bookmarker.ShareAPlace',
                                    title: 'Share a Place',
                                    animated: true,
                                    animationType: 'fade',
                                });
                            }}
                            icon='plus'
                            containerStyle={{
                                width: '60%',
                                paddingVertical: 8,
                                shadowColor: '#ccc',
                                shadowOffset: { width: 0, height: 3 },
                                shadowOpacity: 0.6,
                                shadowRadius: 5,
                            }}
                        >Bookmark Place</CustomButton>
                    </ScreenIntro>
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