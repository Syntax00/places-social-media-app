import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

import ShadowedWrapper from '../UI/ShadowedWrapper/ShadowedWrapper';
import CustomInput from '../UI/CustomInput/CustomInput';
import CustomButton from '../UI/CustomButton/CustomButton';

import mapImage from '../../assets/map.png';

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
    } = props;

    return (
        <View style={styles.bookmarkContainer}>
            <ShadowedWrapper>
                <MapView
                    initialRegion={focusedRegion}
                    style={styles.map} />
                <View style={styles.inputContainer}>
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
                        containerStyle={{ backgroundColor: '#f7cb1b' }}
                    >Next</CustomButton>
                </View>
            </ShadowedWrapper>
        </View>
    );
}

export default BookmarkPlace;