import {View, StyleSheet, Image, Text} from "react-native";
import {getFontFamily} from "../../assets/fonts/helper";
import UserProfileImage from "../UserProfileImage/UserProfileImage";
import {horizontalScale, scaleFontSize, verticalScale} from "../style";

const UserStory = ({firstName, profile_img, id}) => {
    return (
        <>
         <View style={styles.storyContainer}>
             <UserProfileImage profile_img={profile_img} size={65}/>
         <Text style={styles.storyText}>{firstName}</Text>
         </View>
        </>
    )
}
const styles = StyleSheet.create({
    storyContainer: {
        marginRight: horizontalScale(20),
        alignItems: "center"
    },
    storyText: {
        marginTop: verticalScale(8),
        fontFamily: getFontFamily("Inter_18pt", "500"),
        fontWeight: 'bold',
        color: "#022150",
        fontSize: scaleFontSize(14),
        textAlign: "center",
    },
    outerStoryContainer: {
        borderColor: "#F35BAC",
        borderWidth: 1,
        padding:4,

    }
})
export default UserStory;
