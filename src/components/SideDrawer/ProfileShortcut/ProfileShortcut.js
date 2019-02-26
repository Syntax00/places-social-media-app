import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HeadingText from '../../UI/HeadingText/HeadingText';
import MainText from '../../UI/MainText/MainText';

import ProfileShortcutStyles from './ProfileShortcutStyles';

const styles = StyleSheet.create(ProfileShortcutStyles);

const ProfileShortcut = ({ picture, username, email }) => (
    <TouchableOpacity style={styles.container}>
        <View style={styles.profileShortcut}>
            <View style={styles.profilePicContainer}>
                <Image source={picture} style={styles.profilePic} />
            </View>
            <View style={styles.accountInfo}>
                <HeadingText style={styles.username}>{username}</HeadingText>
                <MainText style={styles.email}>{email}</MainText>
            </View>
            <View style={styles.arrowIconContainer}>
                <Icon name="angle-right" style={styles.arrowIcon} />
            </View>
        </View>
    </TouchableOpacity>
);

export default ProfileShortcut;