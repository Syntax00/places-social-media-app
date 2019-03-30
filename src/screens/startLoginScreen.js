import { Navigation } from 'react-native-navigation';

export default () => {
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'places-bookmarker.Auth',
            title: 'Login',
        },
        appStyle: {
            navBarHidden: true,
        },
    });
}