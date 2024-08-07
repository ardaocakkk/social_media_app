import {Image, StyleSheet, Text, View} from "react-native";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import {getFontFamily} from "../../assets/fonts/helper";
import Icon from "@react-native-vector-icons/fontawesome6";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faBookmark, faComment, faEllipsis, faHeart} from "@fortawesome/free-solid-svg-icons";
import {horizontalScale, scaleFontSize, verticalScale} from "../style";


const UserPost = ({firstName, lastName, location, profile_img, post_image, likes, comments, bookmarks}) => {
    return (
        <View style={styles.postOuterContainer}>
            <View style={styles.postContainer}>
                <View style={{flexDirection: 'row'}}>
                <UserProfileImage profile_img={profile_img} size={48} />
                <View style={styles.postAuthor}>
                    <Text style={styles.postAuthorText} >{firstName} {lastName}</Text>
                    <View >
                        <Text style={styles.postAuthorLocationText}>{location}</Text>
                    </View>
                </View>
                </View>
                <View>
                   <FontAwesomeIcon icon={faEllipsis} size={20} color={'#79869F'} />
                </View>
            </View>
            <View style={styles.postImageContainer}>
                <Image source={post_image} />
            </View>
            <View style={{flexDirection:'row', marginLeft: horizontalScale(10)}}>
                <View style={{flexDirection: 'row', alignItems:'center', }}>
                <FontAwesomeIcon size={scaleFontSize(24)} icon={faHeart} color={'#79869F'} />
                 <Text style={styles.iconTextColor}>{likes}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems:'center', marginLeft: 27}}>
                    <FontAwesomeIcon size={scaleFontSize(24)} icon={faComment} color={'#79869F'} />
                    <Text style={styles.iconTextColor}>{comments}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems:'center', marginLeft: 27}}>
                    <FontAwesomeIcon size={scaleFontSize(24)} icon={faBookmark} color={'#79869F'} />
                    <Text style={styles.iconTextColor}>{bookmarks}</Text>
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    postContainer: {
        marginTop: verticalScale(35),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    postOuterContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#EFF2F6',
        paddingBottom: verticalScale(20),

    },
    postAuthor: {
        justifyContent: 'center',
        marginLeft: horizontalScale(10)
    },
    postAuthorText: {
        fontFamily: getFontFamily('Inter_18pt', '600'),
        color: 'black',
        fontSize: scaleFontSize(16),
    },
    postAuthorLocationText: {
        marginTop: verticalScale(5),
        fontFamily: getFontFamily('Inter_18pt', '400'),
        color: '#79869F',
        fontSize: scaleFontSize(12),
    },
    postImageContainer: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: verticalScale(16),
        marginVertical: verticalScale(20)
    },
    iconTextColor: {
        marginLeft: horizontalScale(2),
        color: '#79869F',
        fontSize: scaleFontSize(16)
    }
})

export default UserPost
