import React from 'react';
import { Text, StyleSheet } from 'react-native';

import MainTextStyles from './MainTextStyles';

const styles = StyleSheet.create(MainTextStyles);

const MainText = ({ children, style }) => <Text style={[styles.mainText, style]}>{children}</Text>;

export default MainText;