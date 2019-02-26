import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import CustomInputStyles from './CustomInputStyles';

const styles = StyleSheet.create(CustomInputStyles);

const CustomInput = props => (
    <TextInput
        underlineColorAndroid="transparent"
        {...props}
        style={[styles.input, props.style]}
    />
)

export default CustomInput;