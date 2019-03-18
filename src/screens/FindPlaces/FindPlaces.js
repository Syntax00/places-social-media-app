import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';

import PlacesList from '../../components/PlacesList/PlacesList';

import { getPlaces } from '../../store/actions/index';

import FindPlacesStyles from './FindPlacesStyles';

const styles = StyleSheet.create(FindPlacesStyles);

class FindPlaces extends React.Component {
    constructor(props) {
        super(props);

        const { navigator } = this.props;

        navigator.setOnNavigatorEvent(this.onNavButtonPress);
    }

    componentDidMount() {
        const { getPlacesData } = this.props;
        getPlacesData();
    }

    onNavButtonPress = event => {
        if (event.type === 'NavBarButtonPress' && event.id === 'sideDrawerToggler') {
            const { navigator } = this.props;

            navigator.toggleDrawer({
                side: 'left',
            });

        }
    }

    selectPlaceHandler = (key) => {
        const { bookmarks, navigator } = this.props;
        const selectedPlace = bookmarks.find(bookmark => bookmark.key === key);

        navigator.push({
            screen: 'places-bookmarker.PlaceDetails',
            title: selectedPlace.placeName,
            passProps: {
                selectedPlace,
            }
        })
    }

    render() {
        const { bookmarks } = this.props;

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                   
                    {bookmarks.length > 0
                        ? <PlacesList
                            bookmarks={bookmarks}
                            selectPlaceHandler={this.selectPlaceHandler}
                            {...this.props}
                        />
                        : <Text>No places were bookmarked yet</Text>}
                </View>
            </SafeAreaView>
        );
    };
}

const mapStateToProps = state => {
    return {
        bookmarks: state.placesReducer.bookmarks,
    };
}
const mapDispatchToProps = dispatch => {
    return {
        getPlacesData: () => dispatch(getPlaces()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaces);