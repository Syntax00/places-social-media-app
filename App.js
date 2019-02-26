import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import Auth from './src/screens/Auth/Auth';
import ShareAPlace from './src/screens/ShareAPlace/ShareAPlace';
import FindPlaces from './src/screens/FindPlaces/FindPlaces';
import PlaceDetails from './src/screens/PlaceDetails/PlaceDetails';
import SideDrawer from './src/screens/SideDrawer/SideDrawer';

import store from './src/store/store';

const appStore = store();

Navigation.registerComponent('places-bookmarker.Auth', () => Auth, appStore, Provider);
Navigation.registerComponent('places-bookmarker.ShareAPlace', () => ShareAPlace, appStore, Provider);
Navigation.registerComponent('places-bookmarker.FindPlaces', () => FindPlaces, appStore, Provider);
Navigation.registerComponent('places-bookmarker.PlaceDetails', () => PlaceDetails, appStore, Provider);
Navigation.registerComponent('places-bookmarker.SideDrawer', () => SideDrawer);

Navigation.startSingleScreenApp({
  screen: {
    screen: 'places-bookmarker.Auth',
    title: 'Login',
  },
  appStyle: {
    navBarHidden: true,
  },
});





































// import React, { Component } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { connect } from 'react-redux';

// import {
//   addPlace,
//   deletePlace,
//   selectPlace,
//   deselectPlace,
// } from './src/store/actions/index';

// import BookmarkPlace from './src/components/BookmarkPlace/BookmarkPlace';
// import PlacesList from './src/components/PlacesList/PlacesList';
// import DetailsModal from './src/components/DetailsModal/DetailsModal';

// class App extends Component {
//   state = {
//     placeName: '',
//     errorOccured: '',
//   };

//   changePlaceHandler = (placeName) => {
//     this.setState({
//       placeName,
//     });
//   }

//   addBookmarkHandler = () => {
//     const { placeName } = this.state;
//     const { onAddPlace } = this.props;

//     if (!placeName) {
//       this.setState({ errorOccured: 'You cannot insert empty place name.' });
//     } else {
//       onAddPlace({
//         placeName,
//         placeImage: {
//           uri: 'https://images.all-free-download.com/images/wallpapers_large/cairo_egypt_wallpaper_egypt_world_wallpaper_2049.jpg'
//         },
//         key: Math.random(),
//       });
//       this.setState({
//         errorOccured: '',
//         placeName: '',
//       })
//     }

//   }

//   deleteItemHandler = () => {
//     const { onDeletePlace } = this.props;

//     onDeletePlace();
//   }

//   selectPlaceHandler = key => {
//     const { onSelectPlace } = this.props;

//     onSelectPlace(key);
//   }

//   closeModalHandler = () => {
//     const { onDeselectPlace } = this.props;

//     onDeselectPlace();
//   }

//   render() {
//     const { placeName, errorOccured } = this.state;
//     const { bookmarks, selectedPlace } = this.props;

//     return (
//       <View style={styles.container}>
//         <DetailsModal
//           modalData={selectedPlace}
//           closeModalHandler={this.closeModalHandler}
//           deleteItemHandler={this.deleteItemHandler}
//         />
//         <BookmarkPlace
//           placeName={placeName}
//           changePlaceHandler={this.changePlaceHandler}
//           addBookmarkHandler={this.addBookmarkHandler}
//         />
//         {errorOccured ? <Text style={styles.errorMessage}>You cannot insert an empty place name.</Text> : null}
//         <PlacesList
//           bookmarks={bookmarks}
//           selectPlaceHandler={this.selectPlaceHandler}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     paddingTop: 40,
//   },
//   errorMessage: {
//     backgroundColor: '#ffb7b7',
//     color: '#FFF',
//     borderColor: '#FFF',
//     borderRadius: 10,
//     overflow: 'hidden',
//     borderWidth: 1,
//     width: '80%',
//     paddingVertical: 20,
//     textAlign: 'center',
//     marginVertical: 20
//   },
// });

// const mapStateToProps = state => {
//   return {
//     bookmarks: state.placesReducer.bookmarks,
//     selectedPlace: state.placesReducer.selectedPlace
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onAddPlace: (placeData) => dispatch(addPlace(placeData)),
//     onDeletePlace: () => dispatch(deletePlace()),
//     onSelectPlace: (placeKey) => dispatch(selectPlace(placeKey)),
//     onDeselectPlace: () => dispatch(deselectPlace()),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);