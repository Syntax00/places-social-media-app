import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator, TouchableOpacity, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import ShadowedWrapper from '../UI/ShadowedWrapper/ShadowedWrapper';
import CustomInput from '../UI/CustomInput/CustomInput';
import CustomButton from '../UI/CustomButton/CustomButton';
import MainText from '../UI/MainText/MainText';
import HeadingText from '../UI/HeadingText/HeadingText';
import FeedbackMessage from '../UI/FeedbackMessage/FeedbackMessage';
import CustomDialog from '../UI/CustomDialog/CustomDialog';

import { placeSubmitPopup } from '../../store/actions/index';

import Frown from '../../assets/frown.png';
import Happy from '../../assets/happy.png';

import BookmarkPlaceStyles from './BookmarkPlaceStyles';

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
        submitPlaceStatus,
        onDismissModal,
    } = props;
    let imageContent;
    let popupContent;

    if (loadingImage && selectedImage.length === 0) {
        imageContent = <ActivityIndicator size="small" color="#ccc" />;
    } else {
        imageContent = selectedImage && selectedImage.map((image, index) => {
            return <Image
                source={image}
                style={{ width: 40, height: 40, borderRadius: 0, marginHorizontal: 7, borderRadius: 4 }}
                key={index}
            />
        });
    }

    if (submitPlaceStatus === 'success') {
        popupContent = (
            <View style={styles.popupContent}>
                <Image source={Happy} style={styles.popupImage} />
                <View style={styles.popupTextContainer}>
                    <HeadingText>Neaaaat! Place has been shared!</HeadingText>
                    <MainText style={styles.popupDescriptionText}>
                        Your place has been successfully shared. You can stay tuned for your network to start interacting!
                    </MainText>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <CustomButton
                        pressAction={() => {
                            props.navigator.push({
                                screen: 'places-bookmarker.FindPlaces',
                                title: 'My Favorite Places',
                                animated: true,
                                animationType: 'fade',
                            });
                            onDismissModal();
                        }}
                        icon='eye'
                        iconStyle={{ marginHorizontal: 5 }}
                        containerStyle={{
                            width: '48%',
                            paddingVertical: 8,
                            shadowColor: '#ccc',
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.6,
                            shadowRadius: 5,
                            marginHorizontal: 4,
                        }}
                    >My Places</CustomButton>
                    <CustomButton
                        pressAction={() => onDismissModal()}
                        icon='times'
                        iconStyle={{ marginHorizontal: 5 }}
                        containerStyle={{
                            width: '38%',
                            paddingVertical: 8,
                            backgroundColor: '#f64f58',
                            shadowColor: '#ccc',
                            shadowOffset: { width: 0, height: 3 },
                            shadowOpacity: 0.6,
                            shadowRadius: 5,
                            marginHorizontal: 4,
                        }}
                    >Close</CustomButton>
                </View>
            </View>
        );
    } else if (submitPlaceStatus === 'failure') {
        popupContent = (
            <View style={styles.popupContent}>
                <Image source={Frown} style={styles.popupImage} />
                <View style={styles.popupTextContainer}>
                    <HeadingText>Sooorry! Failed to share your place!</HeadingText>
                    <MainText style={styles.popupDescriptionText}>
                        That might be because you have some issues with your Internet connection or our server is currently down!
                    </MainText>
                </View>
                <CustomButton
                    pressAction={() => onDismissModal()}
                    icon='frown-o'
                    containerStyle={{
                        width: '60%',
                        paddingVertical: 8,
                        backgroundColor: '#f64f58',
                        shadowColor: '#ccc',
                        shadowOffset: { width: 0, height: 3 },
                        shadowOpacity: 0.6,
                        shadowRadius: 5,
                    }}
                >Okay</CustomButton>
            </View>
        );
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

                <CustomDialog
                    isVisible={submitPlaceStatus}
                    dismissAction={onDismissModal}
                >
                    {popupContent}
                </CustomDialog>

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
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        style={{ alignSelf: 'flex-start' }}
                    >
                        <View style={styles.imagesContainer}>
                            {imageContent}
                            <TouchableOpacity onPress={triggerImagePicker}>
                                <View style={styles.addImage}>
                                    <Icon name="plus" style={styles.addImageIcon} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
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
    submitPlaceStatus: state.placesReducer.submitPlaceStatus,
});
const mapDispatchToProps = dispatch => ({
    onDismissModal: () => dispatch(placeSubmitPopup(null)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkPlace);