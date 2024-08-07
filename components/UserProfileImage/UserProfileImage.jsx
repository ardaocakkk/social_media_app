import {Image, StyleSheet, View} from "react-native";


const UserProfileImage = ({profile_img, size}) => {
    return (
        <>
            <View style={[styles.outerStoryContainer, {borderRadius: size}]}>
                <Image source={profile_img} style={{width: size, height: size}} />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    outerStoryContainer: {
        borderColor: "#F35BAC",
        borderWidth: 1,
        padding:4,
    }
})

export default UserProfileImage
