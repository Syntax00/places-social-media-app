import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import ShadowedWrapper from '../UI/ShadowedWrapper/ShadowedWrapper';
import CustomInput from '../UI/CustomInput/CustomInput';
import CustomButton from '../UI/CustomButton/CustomButton';
import MainText from '../UI/MainText/MainText';

import BookmarkPlaceStyles from './BookmarkPlaceStyles';
import FeedbackMessage from '../UI/FeedbackMessage/FeedbackMessage';

const styles = StyleSheet.create(BookmarkPlaceStyles);

const BookmarkPlace = props => {
    const {
        placeName,
        changePlaceHandler,
        addBookmarkHandler,
        errorOccured,
        focusedRegion,
        pickPlaceHandler,
        locationPicked,
        locateMeHandler,
    } = props;

    return (
        <View style={styles.bookmarkContainer}>
            <ShadowedWrapper>
                <MapView
                    initialRegion={focusedRegion}
                    region={focusedRegion}
                    style={styles.map}
                    onPress={pickPlaceHandler}
                >
                    {locationPicked && <MapView.Marker coordinate={focusedRegion} />}
                </MapView>
                <CustomButton
                    pressAction={locateMeHandler}
                    icon="map-marker"
                    containerStyle={{
                        backgroundColor: '#eee',
                        paddingVertical: 14,
                        borderRadius: 0,
                        marginTop: 0
                    }}
                    textStyle={{ color: '#bbb', fontWeight: '400' }}
                    iconStyle={{ color: '#bbb' }}
                >Get My Location</CustomButton>
                <View style={styles.inputContainer}>
                    <MainText style={{
                        paddingVertical: 10,
                        paddingHorizontal: 5,
                        color: '#bbb',
                        fontSize: 12,
                        textAlign: 'center',
                    }}>
                        You need to at least insert the place's name and its location in order to bookmark it.
                    </MainText>
                    <CustomInput
                        placeholder="Insert place's name ..."
                        value={placeName}
                        onChangeText={changePlaceHandler}
                        style={{ backgroundColor: '#eee', textAlign: 'center', paddingLeft: 0 }}
                    />
                    <CustomButton
                        pressAction={addBookmarkHandler}
                        icon="picture-o"
                        containerStyle={{ backgroundColor: '#eee', paddingVertical: 11 }}
                        textStyle={{ color: '#bbb', fontWeight: '400' }}
                        iconStyle={{ color: '#bbb' }}
                    >Upload Place Image</CustomButton>
                    {errorOccured
                        ? <FeedbackMessage message="You cannot insert empty place's name" type="error" />
                        : null}
                    <CustomButton
                        pressAction={addBookmarkHandler}
                        icon="caret-right"
                        disabled={!placeName || !locationPicked}
                        containerStyle={{ backgroundColor: '#f7cb1b' }}
                    >Next</CustomButton>
                </View>
            </ShadowedWrapper>
        </View>
    );
}

export default BookmarkPlace;