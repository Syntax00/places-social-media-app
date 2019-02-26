import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';

import { deletePlace } from '../../store/actions/index';

import PlaceDetailsStyles from './PlaceDetailsStyles';

const styles = StyleSheet.create(PlaceDetailsStyles);


class PlaceDetails extends React.Component {
    deletePlaceHandler = () => {
        const { selectedPlace: { key }, onDeletePlace, navigator } = this.props;

        onDeletePlace(key);
        navigator.pop();
    }

    render() {
        const { selectedPlace } = this.props;
        return (
            <View>
                <View style={styles.detailsContainer}>
                    <Image source={selectedPlace.placeImage} style={styles.detailsImage} />
                    <Text style={styles.detailsText}>{selectedPlace.placeName}</Text>
                </View>
                <View>
                    <Icon size={30} name="searchengin" color="red" />
                    <Button title="Delete" color="red" onPress={this.deletePlaceHandler} />
                </View>
            </View>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key)),
    };
}

export default connect(null, mapDispatchToProps)(PlaceDetails);