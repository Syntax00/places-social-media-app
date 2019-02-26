import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import MainText from '../../UI/MainText/MainText';

import NavigationItemsStyles from './NavigationItemsStyles';

const styles = StyleSheet.create(NavigationItemsStyles);

const NavigationItems = ({ data }) => (
    <View style={[styles.container, { flex: 1 }]}>
        {data && data.map(item => (
            <TouchableOpacity style={styles.item} key={item.label}>
                <Icon name={item.icon} size={20} style={styles.itemIcon} />
                <MainText style={styles.itemText}>{item.label}</MainText>
            </TouchableOpacity>
        ))}
    </View>
);

export default NavigationItems;