import React from 'react';
import { StyleSheet } from 'react-native';

import MainText from '../MainText/MainText';

import HeadingTextStyles from './HeadingTextStyles';

const styles = StyleSheet.create(HeadingTextStyles);

const HeadingText = ({ children, style }) => <MainText style={[styles.headingText, style]}>{children}</MainText>

export default HeadingText;