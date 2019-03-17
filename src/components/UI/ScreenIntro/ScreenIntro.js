import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import MainText from '../../UI/MainText/MainText';
import HeadingText from '../../UI/HeadingText/HeadingText';
import ShadowedWrapper from '../../UI/ShadowedWrapper/ShadowedWrapper';

import ScreenIntroStyles from './ScreenIntroStyles';

const styles = StyleSheet.create(ScreenIntroStyles);

const ScreenIntro = ({ heading, description, icon, iconStyle, containerStyle, children }) => {
    return (
        <ShadowedWrapper>
            <View style={[styles.container, containerStyle]}>
                <Image source={icon} style={[styles.icon, iconStyle]} />
                <HeadingText>{heading}</HeadingText>
                <MainText style={styles.description}>{description}</MainText>
            </View>
            <View>
                {children}
            </View>
        </ShadowedWrapper>
    );
}

export default ScreenIntro;