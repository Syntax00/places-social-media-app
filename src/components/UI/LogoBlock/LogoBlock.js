import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import MainText from '../MainText/MainText';

import LogoBlockStyles from './LogoBlockStyles';

const styles = StyleSheet.create(LogoBlockStyles);

const LogoBlock = () => (
    <View style={styles.logoContainer}>
        <MainText style={styles.logo}>Bv</MainText>
        <MainText style={styles.slugan}>Share, find and review awesome places that you've once visited...</MainText>
        <View style={styles.starsContainer}>
            <Icon name="star" style={styles.singleMainStar} />
            <Icon name="star" style={styles.singleMainStar} />
            <Icon name="star" style={styles.singleMainStar} />
            <Icon name="star" style={styles.singleMainStar} />
            <Icon name="star" style={styles.singleSecondaryStar} />
        </View>
    </View>
)

export default LogoBlock;