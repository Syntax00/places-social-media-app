import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const startMainApp = () => {
    Promise.all([
        Icon.getImageSource("retweet", 25),
        Icon.getImageSource("map", 25),
        Icon.getImageSource("bars", 25),
        Icon.getImageSource("user", 25),
        Icon.getImageSource("clock-o", 25),
    ]).then(sources => {
        Navigation.startTabBasedApp({
            tabs: [
                {
                    screen: 'places-bookmarker.ShareAPlace',
                    title: 'Feeds',
                    label: 'Feeds',
                    icon: sources[4],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                id: 'sideDrawerToggler',
                            }
                        ]
                    },
                },
                {
                    screen: 'places-bookmarker.ShareAPlace',
                    title: 'Share a Place',
                    label: 'Share',
                    icon: sources[0],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                id: 'sideDrawerToggler',
                            }
                        ]
                    },
                },
                {
                    screen: 'places-bookmarker.FindPlaces',
                    title: 'Find an Awesome Place',
                    label: 'Browse',
                    icon: sources[1],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                id: 'sideDrawerToggler',
                            }
                        ]
                    },
                },
                {
                    screen: 'places-bookmarker.FindPlaces',
                    title: 'My Account',
                    label: 'Account',
                    icon: sources[3],
                    navigatorButtons: {
                        leftButtons: [
                            {
                                icon: sources[2],
                                id: 'sideDrawerToggler',
                            }
                        ]
                    },
                },
            ],
            drawer: {
                left: {
                    screen: "places-bookmarker.SideDrawer",
                }
            },
            tabsStyle: {
                tabBarHidden: false,
                tabBarBackgroundColor: '#007AFF',
                tabBarButtonColor: '#0059ba',
                tabBarLabelColor: '#0059ba',
                tabBarSelectedLabelColor: '#FFF',
                tabBarSelectedButtonColor: '#FFF',
            },
            appStyle: {
                navBarBackgroundColor: '#007AFF',
                navBarNoBorder: true,
                navBarButtonColor: '#FFF',
                navBarTextColor: '#FFF',
                screenBackgroundColor: '#007AFF',
            }
        });
    })
}

export default startMainApp;