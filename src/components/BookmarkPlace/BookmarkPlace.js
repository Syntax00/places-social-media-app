import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
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
        selectedImage,
        triggerImagePicker,
        loadingImage,
    } = props;
    let imageContent;

    if (loadingImage) {
        imageContent = <ActivityIndicator size="small" color="#ccc" />;
    } else {
        imageContent = selectedImage && <Image source={selectedImage} style={{ width: '100%', height: 200, borderRadius: 10 }} />
    }

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
                    {imageContent}
                    <MainText style={{
                        paddingVertical: 10,
                        paddingHorizontal: 5,
                        color: '#bbb',
                        fontSize: 12,
                        textAlign: 'center',
                    }}>
                        You need to at least insert the place's name and its location in order to bookmark it.
                    </MainText>
                    <CustomButton
                        pressAction={triggerImagePicker}
                        icon="picture-o"
                        containerStyle={{ backgroundColor: '#eee', paddingVertical: 11 }}
                        textStyle={{ color: '#bbb', fontWeight: '400' }}
                        iconStyle={{ color: '#bbb' }}
                    >Upload Place Image</CustomButton>
                    <CustomInput
                        placeholder="Insert place's name ..."
                        value={placeName}
                        onChangeText={changePlaceHandler}
                        style={{ backgroundColor: '#eee', textAlign: 'center', paddingLeft: 0 }}
                    />
                    {errorOccured
                        ? <FeedbackMessage message="You cannot insert empty place's name" type="error" />
                        : null}
                    <CustomButton
                        pressAction={addBookmarkHandler}
                        icon="caret-right"
                        disabled={!placeName || !locationPicked || !selectedImage}
                        containerStyle={{ backgroundColor: '#f7cb1b' }}
                    >Next</CustomButton>
                </View>
            </ShadowedWrapper>
        </View >
    );
}

export default BookmarkPlace;