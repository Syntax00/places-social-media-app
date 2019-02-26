import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import ShadowedWrapper from '../UI/ShadowedWrapper/ShadowedWrapper';
import CustomInput from '../UI/CustomInput/CustomInput';
import MainText from '../UI/MainText/MainText';
import CustomButton from '../UI/CustomButton/CustomButton';

import mapImage from '../../assets/map.png';

import BookmarkPlaceStyles from './BookmarkPlaceStyles';

const styles = StyleSheet.create(BookmarkPlaceStyles);

const BookmarkPlace = props => {
    const { placeName, changePlaceHandler, addBookmarkHandler, errorOccured } = props;

    return (
        <View style={styles.bookmarkContainer}>
            <ShadowedWrapper>
                <Image source={mapImage} style={styles.mapImage} />
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
                        ? <MainText style={styles.errorMessage}>You cannot insert an empty place name.</MainText>
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