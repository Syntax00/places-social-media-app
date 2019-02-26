import React from 'react';
import { View, StyleSheet } from 'react-native';

import MainText from '../MainText/MainText';

import LinedHeadingStyles from './LinedHeadingStyles';

const styles = StyleSheet.create(LinedHeadingStyles);

const LinedHeading = ({ children, lineWidth, titleWidth, headingStyle }) => (
    <View style={[styles.linedHeadingContainer, headingStyle]}>
        <View
            style={[styles.linedHeadingLine, { width: lineWidth || styles.linedHeadingLine.width }]}
        >
            <MainText> </MainText>
        </View>

        <View
            style={[styles.linedHeadingTextContainer, { width: titleWidth || styles.linedHeadingTextContainer.width }]}
        >
            <MainText style={styles.linedHeadingText}>{children}</MainText>
        </View>

        <View
            style={[styles.linedHeadingLine, { width: lineWidth || styles.linedHeadingLine.width }]}
        >
            <MainText> </MainText>
        </View>
    </View>
);

export default LinedHeading;