import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import MainText from '../MainText/MainText';

import CustomButtonStyles from './CustomButtonStyles';

const styles = StyleSheet.create(CustomButtonStyles);

const CustomButton = ({
    pressAction,
    containerStyle,
    children,
    textStyle,
    icon,
    iconStyle
}) => (
        <TouchableOpacity
            onPress={pressAction}
            style={[styles.button, containerStyle]}
        >
            <MainText style={[styles.buttonText, textStyle]}>{children}</MainText>
            {icon && <Icon name={icon} style={[styles.buttonIcon, iconStyle]} />}
        </TouchableOpacity>
    )

export default CustomButton;