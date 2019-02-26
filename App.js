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
