import React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView, ScrollView, AsyncStorage } from 'react-native';

import CustomButton from '../../components/UI/CustomButton/CustomButton';
import ProfileShortcut from '../../components/SideDrawer/ProfileShortcut/ProfileShortcut';
import Statistics from '../../components/SideDrawer/Statistics/Statistics';
import NavigationItems from '../../components/SideDrawer/NavigationItems/NavigationItems';

import profilePicture from '../../assets/profilePic.jpg';

import startLoginScreen from '../startLoginScreen';

import SideDrawerStyles from './SideDrawerStyles';

const styles = StyleSheet.create(SideDrawerStyles);

const SideDrawer = () => (
    /* Specifying the width for Android */
    <SafeAreaView style={[styles.container, { width: Dimensions.get('window').width * 0.8 }]}>
        <ScrollView>
            <ProfileShortcut
                picture={profilePicture}
                username="Mohamed Ahmed"
                email="m.syntax95@gmail.com"
            />

            <Statistics
                data={[{
                    label: '100+ Followers',
                    icon: 'users',
                },
                {
                    label: '22+ Following',
                    icon: 'users',
                },
                {
                    label: '13 Bookmarked',
                    icon: 'star',
                },
                {
                    label: '122 Loved',
                    icon: 'heart',
                }]}
            />

            <NavigationItems
                data={[{
                    label: 'Followers',
                    icon: 'users',
                },
                {
                    label: 'Media',
                    icon: 'pause',
                },
                {
                    label: 'Likes and Bookmarks',
                    icon: 'heart',
                },
                {
                    label: 'Privacy and Security',
                    icon: 'lock',
                },
                {
                    label: 'Settings',
                    icon: 'cog',
                }]}
            />

            <View style={styles.logoutContainer}>
                <CustomButton
                    pressAction={() => {
                        AsyncStorage.setItem('@auth:auth', 'false');
                        startLoginScreen();
                    }}
                    containerStyle={styles.logoutButton}
                    icon="sign-out"
                >Logout</CustomButton>
            </View>
        </ScrollView>
    </SafeAreaView>
);

export default SideDrawer;