import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import MainText from '../../UI/MainText/MainText';

import StatisticsStyles from './StatisticsStyles';

const styles = StyleSheet.create(StatisticsStyles);

const Statistics = ({ data }) => (
    <View style={styles.statsContainer}>
        {data && data.map(item => (
            <View style={styles.stats} key={item.label}>
                <Icon name={item.icon} style={styles.statsIcon} />
                <MainText style={styles.statsText}>{item.label}</MainText>
            </View>
        ))}
    </View>
);

export default Statistics;