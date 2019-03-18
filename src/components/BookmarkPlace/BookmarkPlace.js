import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        submitPlaceLoading,
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
                        backgroundColor: '#f7cb1b',
                        paddingVertical: 14,
                        borderRadius: 0,
                        marginTop: 0
                    }}
                    textStyle={{ color: '#FFF', fontWeight: '400' }}
                    iconStyle={{ color: '#FFF' }}
                >Get My Location</CustomButton>

                <View style={styles.additionalOptionsContainer}>
                    <TouchableOpacity onPress={triggerImagePicker}>
                        <View style={styles.additionalOption}>
                            <Icon name="picture-o" style={styles.additionalOptionIcon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('Video Placeholder')}>
                        <View style={styles.additionalOption}>
                            <Icon name="video-camera" style={styles.additionalOptionIcon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('Companions Placeholder')}>
                        <View style={styles.additionalOption}>
                            <Icon name="users" style={styles.additionalOptionIcon} />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => console.log('Fees Placeholder')}>
                        <View style={styles.additionalOption}>
                            <Icon name="dollar" style={styles.additionalOptionIcon} />
                        </View>
                    </TouchableOpacity>
                </View>

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
                    <CustomInput
                        placeholder="Insert place's name ..."
                        value={placeName}
                        onChangeText={changePlaceHandler}
                        style={{ backgroundColor: '#eee', textAlign: 'center', paddingLeft: 0 }}
                    />
                    {errorOccured
                        ? <FeedbackMessage message="You cannot insert empty place's name" type="error" />
                        : null}
                    {submitPlaceLoading ? <ActivityIndicator /> : (<CustomButton
                        pressAction={addBookmarkHandler}
                        icon="plus"
                        disabled={!placeName || !locationPicked || !selectedImage}
                        containerStyle={{ backgroundColor: '#f7cb1b' }}
                    >Add</CustomButton>)}
                </View>
            </ShadowedWrapper>
        </View >
    );
}

const mapStateToProps = state => ({
    submitPlaceLoading: state.uiReducer.submitPlaceLoading,
});

export default connect(mapStateToProps)(BookmarkPlace);