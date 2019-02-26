import React from 'react';
import { StyleSheet } from 'react-native';

import MainText from '../MainText/MainText';

import FeedbackMessageStyles from './FeedbackMessageStyles';

const styles = StyleSheet.create(FeedbackMessageStyles);

const FeedbackMessage = ({ message, type }) => (
    <MainText style={[styles.message, styles[type]]}>{message}</MainText>
);

export default FeedbackMessage;