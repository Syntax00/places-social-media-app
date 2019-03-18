import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HeadingText from '../../UI/HeadingText/HeadingText';
import MainText from '../../UI/MainText/MainText';

import placeholderImage1 from '../../../assets/cairo1.jpg';
import placeholderImage2 from '../../../assets/cairo2.jpg';
import placeholderImage3 from '../../../assets/cairo3.jpg';
import placeholderImage4 from '../../../assets/cairo4.jpg';
import placeholderImage5 from '../../../assets/munich.jpg';

import PlaceItemStyles from './PlaceItemStyles';

const styles = StyleSheet.create(PlaceItemStyles);

const PlaceItem = props => {
    let { place, index, selectPlaceHandler, placeImage } = props;
    const description = "An awesome place that I had visited multiple times, it looks stunning and beautiful".slice(0, 40);
    const placeImageArray = [placeholderImage1, placeholderImage2, placeholderImage3, placeholderImage4, placeholderImage5];

    return (
        <TouchableOpacity onPress={() => selectPlaceHandler(index)}>
            <View style={styles.placeItem}>
                <View>
                    <Image
                        source={placeImageArray[Math.floor(Math.random() * placeImageArray.length)]}
                        style={styles.itemCardImage}
                    />
                </View>
                <View style={styles.itemCard}>
                    <View style={styles.itemCardInfo}>
                        <HeadingText style={{ marginBottom: 0 }}>{place}</HeadingText>
                        <MainText style={{ fontSize: 12, color: '#999' }}>{description}</MainText>
                        <View style={styles.infoItems}>
                            <View style={styles.infoItem}>
                                <Icon name="heart" style={[styles.infoItemIcon, { color: '#f3645b' }]} />
                                <MainText style={{ fontSize: 12, color: '#999' }}>299 Likes</MainText>
                            </View>
                            <View style={styles.infoItem}>
                                <Icon name="comment" style={[styles.infoItemIcon, { color: '#f7cb1b' }]} />
                                <MainText style={{ fontSize: 12, color: '#999' }}>10 Comments</MainText>
                            </View>
                        </View>
                    </View>
                    <View style={styles.starsContainer}>
                        <Icon name="star" style={styles.singleMainStar} />
                        <Icon name="star" style={styles.singleMainStar} />
                        <Icon name="star" style={styles.singleMainStar} />
                        <Icon name="star" style={styles.singleMainStar} />
                        <Icon name="star" style={styles.singleSecondaryStar} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default PlaceItem;