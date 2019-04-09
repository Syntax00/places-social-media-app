const PlaceDetailsStyles = {
    detailsContainer: {
    },
    detailsImage: {
        height: 200,
        width: '100%',
    },
    detailsText: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
        padding: 10,
        marginBottom: 20
    },
    detailsInfoContainer: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 10,
    },
    leftInfo: {
        flexDirection: 'row',
        width: '50%',
    },
    detailsInfo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
    },
    detailsInfoIcon: {
        fontSize: 24,
    },
    detailsInfoIconHeart: {
        color: '#f64f58',
    },
    detailsInfoIconComment: {
        color: '#f7cb1b',
    },
    rightInfo: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    dottedIconContainer: {
        width: '60%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingRight: 20,
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        paddingLeft: 20,
    },
    singleMainStar: {
        marginHorizontal: 4,
        color: '#f7cb1b',
        fontSize: 14,
    },
    singleSecondaryStar: {
        marginHorizontal: 4,
        color: '#9bcbff',
        fontSize: 14,
    },
    controllersContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    singleController: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    singleControllerInner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    singleControllerIcon: {
        marginHorizontal: 7,
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 3,
        borderRadius: 9,
        overflow: 'hidden',
        width: 18,
        height: 18,
        backgroundColor: '#FFF'
    },
    editController: {
        backgroundColor: '#61ddc7',
    },
    editIcon: { color: '#61ddc7', },
    deleteController: {
        backgroundColor: '#f64f58',
    },
    deleteIcon: { color: '#f64f58', },
    commentsSection: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 20,
        height: 500,
    },
    singleComment: {
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10,
    },
    commentContent: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        paddingVertical: 20,
    },
    profilePic: {
        width: '20%',
        alignItems: 'center',
    },
    commentInfo: {
        width: '80%',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
    },
    comment: {
        marginVertical: 4,
        fontStyle: 'italic',
        color: '#999',
    },
    commentControllers: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loveAction: {
        width: '30%',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#f64f58',
    },
    replyAction: {
        width: '70%',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
    }
};

export default PlaceDetailsStyles;