import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import Slideshow from 'react-native-image-slider-show';

import MainText from '../../components/UI/MainText/MainText';

import { deletePlace } from '../../store/actions/index';

import placeholderImage1 from '../../assets/cairo1.jpg';
import placeholderImage2 from '../../assets/cairo2.jpg';
import placeholderImage3 from '../../assets/cairo3.jpg';
import profilePicture1 from '../../assets/girl.jpg';
import profilePicture2 from '../../assets/guy1.jpg';
import profilePicture3 from '../../assets/guy2.jpeg';
import profilePicture4 from '../../assets/guy3.jpeg';

import PlaceDetailsStyles from './PlaceDetailsStyles';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

const styles = StyleSheet.create(PlaceDetailsStyles);


class PlaceDetails extends React.Component {
    state = {
        showControllers: false,
    }

    deletePlaceHandler = () => {
        const { selectedPlace: { key }, onDeletePlace, navigator } = this.props;

        onDeletePlace(key);
        navigator.pop();
    }

    render() {
        const { selectedPlace } = this.props;
        const { showControllers } = this.state;
        return (
            <View>
                <View style={styles.detailsContainer}>
                    <Slideshow
                        dataSource={[
                            {
                                title: selectedPlace.placeName,
                                caption: 'Some description regarding the place can be inserted and displayed here',
                                url: placeholderImage1,
                            }, {
                                title: selectedPlace.placeName,
                                caption: 'Some description regarding the place can be inserted and displayed here',
                                url: placeholderImage2,
                            }, {
                                title: selectedPlace.placeName,
                                caption: 'Some description regarding the place can be inserted and displayed here',
                                url: placeholderImage3,
                            },
                        ]}
                        titleStyle={{ color: '#FFF', fontWeight: 'bold', fontSize: 20, marginLeft: 20, }}
                        captionStyle={{ color: '#FFF', marginLeft: 20, fontSize: 12 }}
                    />

                    <View style={styles.detailsInfoContainer}>
                        <View style={styles.leftInfo}>
                            <View style={styles.detailsInfo}>
                                <Icon name="heart" style={[styles.detailsInfoIcon, styles.detailsInfoIconHeart]} />
                                <MainText style={{ fontSize: 12, color: '#999', marginVertical: 5 }}>212 Loves</MainText>
                            </View>
                            <View style={styles.detailsInfo}>
                                <Icon name="comment" style={[styles.detailsInfoIcon, styles.detailsInfoIconComment]} />
                                <MainText style={{ fontSize: 12, color: '#999', marginVertical: 5 }}>12 Comments</MainText>
                            </View>
                        </View>

                        <View style={styles.rightInfo}>
                            <View style={styles.starsContainer}>
                                <Icon name="star" style={styles.singleMainStar} />
                                <Icon name="star" style={styles.singleMainStar} />
                                <Icon name="star" style={styles.singleMainStar} />
                                <Icon name="star" style={styles.singleMainStar} />
                                <Icon name="star" style={styles.singleSecondaryStar} />
                            </View>

                            <View style={styles.dottedIconContainer}>
                                <TouchableOpacity onPress={() => this.setState({ showControllers: !showControllers })}>
                                    <Icon name="ellipsis-h" style={{ fontSize: 17, color: '#999' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {showControllers ? <View style={styles.controllersContainer}>
                        <TouchableOpacity onPress={() => { }} style={[styles.singleController, styles.editController]}>
                            <View style={styles.singleControllerInner}>
                                <Icon name="pencil" style={[styles.singleControllerIcon, styles.editIcon]} />
                                <MainText style={{ color: '#FFF', }}>Edit</MainText>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }} style={[styles.singleController, styles.deleteController]}>
                            <View style={styles.singleControllerInner}>
                                <Icon name="trash" style={[styles.singleControllerIcon, styles.deleteIcon]} />
                                <MainText style={{ color: '#FFF', }}>Delete</MainText>
                            </View>
                        </TouchableOpacity>
                    </View> : null}
                    <View style={{ height: 400 }}>
                        <ScrollView style={{ flex: 0.8 }}>
                            <View style={styles.commentsSection}>
                                <View style={styles.singleComment}>
                                    <View style={styles.commentContent}>
                                        <View style={styles.profilePic}>
                                            <Image source={profilePicture1} style={{ width: 40, height: 40, borderRadius: 20, }} />
                                        </View>
                                        <View style={styles.commentInfo}>
                                            <HeadingText>Jasmine Ellan</HeadingText>
                                            <MainText style={styles.comment}>Looks like an awesome place! How did you know or hear about it?!</MainText>
                                        </View>
                                    </View>
                                    <View style={styles.commentControllers}>
                                        <TouchableOpacity onPress={() => { }} style={styles.loveAction}>
                                            <Icon name="heart" style={{ color: '#FFF', marginHorizontal: 6 }} />
                                            <MainText style={{ color: '#FFF', }}>Love</MainText>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => { }} style={styles.replyAction}>
                                            <Icon name="comment" style={{ color: '#999', marginHorizontal: 6 }} />
                                            <MainText style={{ color: '#999', }}>Start typing a reply...</MainText>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.singleComment}>
                                    <View style={styles.commentContent}>
                                        <View style={styles.profilePic}>
                                            <Image source={profilePicture2} style={{ width: 40, height: 40, borderRadius: 20, }} />
                                        </View>
                                        <View style={styles.commentInfo}>
                                            <HeadingText>Ahmed Youssef</HeadingText>
                                            <MainText style={styles.comment}>Okay, that looks truly cool</MainText>
                                        </View>
                                    </View>
                                    <View style={styles.commentControllers}>
                                        <TouchableOpacity onPress={() => { }} style={styles.loveAction}>
                                            <Icon name="heart" style={{ color: '#FFF', marginHorizontal: 6 }} />
                                            <MainText style={{ color: '#FFF', }}>Love</MainText>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => { }} style={styles.replyAction}>
                                            <Icon name="comment" style={{ color: '#999', marginHorizontal: 6 }} />
                                            <MainText style={{ color: '#999', }}>Start typing a reply...</MainText>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.singleComment}>
                                    <View style={styles.commentContent}>
                                        <View style={styles.profilePic}>
                                            <Image source={profilePicture3} style={{ width: 40, height: 40, borderRadius: 20, }} />
                                        </View>
                                        <View style={styles.commentInfo}>
                                            <HeadingText>Mohamed ElSayed</HeadingText>
                                            <MainText style={styles.comment}>Could you please provide more information about it?</MainText>
                                        </View>
                                    </View>
                                    <View style={styles.commentControllers}>
                                        <TouchableOpacity onPress={() => { }} style={styles.loveAction}>
                                            <Icon name="heart" style={{ color: '#FFF', marginHorizontal: 6 }} />
                                            <MainText style={{ color: '#FFF', }}>Love</MainText>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => { }} style={styles.replyAction}>
                                            <Icon name="comment" style={{ color: '#999', marginHorizontal: 6 }} />
                                            <MainText style={{ color: '#999', }}>Start typing a reply...</MainText>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.singleComment}>
                                    <View style={styles.commentContent}>
                                        <View style={styles.profilePic}>
                                            <Image source={profilePicture4} style={{ width: 40, height: 40, borderRadius: 20, }} />
                                        </View>
                                        <View style={styles.commentInfo}>
                                            <HeadingText>Jean Philipe</HeadingText>
                                            <MainText style={styles.comment}>A bit crowdy, I guess..</MainText>
                                        </View>
                                    </View>
                                    <View style={styles.commentControllers}>
                                        <TouchableOpacity onPress={() => { }} style={styles.loveAction}>
                                            <Icon name="heart" style={{ color: '#FFF', marginHorizontal: 6 }} />
                                            <MainText style={{ color: '#FFF', }}>Love</MainText>
                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => { }} style={styles.replyAction}>
                                            <Icon name="comment" style={{ color: '#999', marginHorizontal: 6 }} />
                                            <MainText style={{ color: '#999', }}>Start typing a reply...</MainText>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View >
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key)),
    };
}

export default connect(null, mapDispatchToProps)(PlaceDetails);