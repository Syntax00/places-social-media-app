import React from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    KeyboardAvoidingView,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

import BookmarkPlace from '../../components/BookmarkPlace/BookmarkPlace';
import ScreenIntro from '../../components/UI/ScreenIntro/ScreenIntro';


import locationImage from '../../assets/places.png';
import placeImagePlaceholder from '../../assets/Wharf-at-night-in-Munich-city-HD-wallpaper-1680x1050.jpg';
import cairo1Placeholder from '../../assets/cairo1.jpg';
import cairo2Placeholder from '../../assets/cairo2.jpg';
import cairo3Placeholder from '../../assets/cairo3.jpg';
import cairo4Placeholder from '../../assets/cairo4.jpg';

import ShareAPlaceStyles from './ShareAPlaceStyles';
import MainText from '../../components/UI/MainText/MainText';

const styles = StyleSheet.create(ShareAPlaceStyles);

class ShareAPlace extends React.Component {
    constructor(props) {
        super(props);
        const { navigator } = this.props;

        navigator.setOnNavigatorEvent(this.onNavButtonPress);
        this.getUserLocationHandler();
    }

    state = {
        placeName: '',
        errorOccured: '',
        focusedRegion: {
            latitude: 100.7900352,
            longitude: -122.4013726,
            latitudeDelta: 0.0122,
            longitudeDelta: Dimensions.get('window').width / Dimensions.get('window').height * 0.0122,
        },
        locationPicked: false,
        selectedImage: null,
        loadingImage: false,
    };

    onNavButtonPress = event => {
        if (event.type === 'NavBarButtonPress' && event.id === 'sideDrawerToggler') {
            const { navigator } = this.props;

            navigator.toggleDrawer({
                side: 'left',
            });
        }
    }

    changePlaceHandler = (placeName) => {
        this.setState({
            placeName,
        });
    }

    addBookmarkHandler = () => {
        const { placeName, focusedRegion, selectedImage } = this.state;
        const { onAddPlace } = this.props;

        if (!placeName) {
            this.setState({ errorOccured: 'You cannot insert empty place name.' });
        } else {
            onAddPlace({
                placeName,
                placeImage: { uri: selectedImage.uri, base64: selectedImage.base64 },
                key: String(Math.random()),
                location: {
                    latitude: focusedRegion.latitude,
                    longitude: focusedRegion.longitude,
                },
            });
            this.setState({
                errorOccured: '',
                placeName: '',
            });
        }
    }

    pickPlaceHandler = event => {
        const { nativeEvent: { coordinate } } = event;

        this.setState(prevState => ({
            focusedRegion: {
                ...prevState.focusedRegion,
                latitude: coordinate.latitude,
                longitude: coordinate.longitude,
            },
            locationPicked: true,
        }))
    }

    getUserLocationHandler = () => {
        navigator.geolocation.getCurrentPosition(position => {
            const event = {
                nativeEvent: {
                    coordinate: {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    },
                },
            };
            this.pickPlaceHandler(event);
        }, error => {
            console.error(error);
        });
    };

    pickPlaceImageHandler = () => {
        this.setState({
            loadingImage: true,
        });
        ImagePicker.showImagePicker({ title: 'Select Place\'s Image' }, response => {
            if (response.didCancel) {
                console.log('Image picker has been cancelled');
                this.setState({
                    loadingImage: false,
                });
            } else if (response.error) {
                console.error(response.error);
                this.setState({
                    loadingImage: false,
                });
            } else {
                this.setState({
                    selectedImage: { uri: response.uri, base64: response.data },
                    loadingImage: false,
                });
            }
        })
    }

    render() {
        const {
            placeName,
            errorOccured,
            focusedRegion,
            locationPicked,
            selectedImage,
            loadingImage,
        } = this.state;
        const { navigator } = this.props;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
                    <ScrollView>
                        <View style={styles.container}>
                            <View style={styles.screenIntroContainer}>
                                <ScreenIntro
                                    heading="Share Awesome Place"
                                    description="Add a picture of the place you want to share, name it, and pick it on map"
                                    icon={locationImage}
                                    iconStyle={{ height: 43, marginBottom: 8 }}
                                    containerStyle={{ paddingTop: 0 }}
                                >
                                    <View style={styles.screenIntroContent}>
                                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                            <Image source={placeImagePlaceholder} style={styles.screenIntroContentImage} />
                                            <Image source={cairo1Placeholder} style={styles.screenIntroContentImage} />
                                            <Image source={cairo2Placeholder} style={styles.screenIntroContentImage} />
                                            <Image source={cairo3Placeholder} style={styles.screenIntroContentImage} />
                                            <Image source={cairo4Placeholder} style={styles.screenIntroContentImage} />
                                            <TouchableOpacity onPress={() => {
                                                navigator.push({
                                                    screen: 'places-bookmarker.FindPlaces',
                                                    title: 'My Favorite Places',
                                                    animated: true,
                                                    animationType: 'fade',
                                                });
                                            }}>
                                                <View style={styles.restButton}>
                                                    <Icon name="ellipsis-h" style={styles.restButtonDots} />
                                                </View>
                                            </TouchableOpacity>
                                        </ScrollView>
                                    </View>
                                </ScreenIntro>
                            </View>

                            <BookmarkPlace
                                placeName={placeName}
                                changePlaceHandler={this.changePlaceHandler}
                                addBookmarkHandler={this.addBookmarkHandler}
                                errorOccured={errorOccured}
                                focusedRegion={focusedRegion}
                                pickPlaceHandler={this.pickPlaceHandler}
                                locationPicked={locationPicked}
                                locateMeHandler={this.getUserLocationHandler}
                                selectedImage={selectedImage}
                                triggerImagePicker={this.pickPlaceImageHandler}
                                loadingImage={loadingImage}
                            />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    };
}


const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeData) => dispatch(addPlace(placeData)),
    };
}
export default connect(null, mapDispatchToProps)(ShareAPlace);