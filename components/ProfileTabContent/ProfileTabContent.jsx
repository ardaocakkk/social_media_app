import {Image, ScrollView, StyleSheet, View} from "react-native";
import {horizontalScale, verticalScale} from "../style";


const ProfileTabContent = () => {

    return <ScrollView style={styles.profileTabContentContainer}>
        <View style={styles.profileTabContent}>
        <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/images/default_post.png')} />
        <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/images/default_post.png')} />
        <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/images/default_post.png')} />
        <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/images/default_post.png')} />
            <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/images/default_post.png')} />
            <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/images/default_post.png')} />
            <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/images/default_post.png')} />
            <Image resizeMode={'contain'} style={styles.image} source={require('../../assets/images/default_post.png')} />
        </View>
        </ScrollView>

}

const styles = StyleSheet.create({
    profileTabContentContainer:{
        flex: 1,
        backgroundColor: 'white'
    },
    profileTabContent: {
        marginTop: verticalScale(10),
        paddingHorizontal: horizontalScale(21),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

    },
    image: {
        width: horizontalScale(150),
        height: verticalScale(90),
        marginTop: verticalScale(11)
    },
})

export default ProfileTabContent
