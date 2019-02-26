import React from 'react';
import { View, StyleSheet } from 'react-native';

import ShadowedWrapperStyles from './ShadowedWrapperStyles';

const styles = StyleSheet.create(ShadowedWrapperStyles);

const ShadowedWrapper = ({ children, style }) => <View style={[styles.shadowedContainer, style]}>{children}</View>;

export default ShadowedWrapper;