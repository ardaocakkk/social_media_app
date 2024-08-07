import {Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {horizontalScale, scaleFontSize, verticalScale} from "../../components/style";
import LinearGradient from "react-native-linear-gradient";
import {getFontFamily} from "../../assets/fonts/helper";
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import {BottomTabsNavigation, ProfileTabsNavigation} from "../../navigation/MainNavigation";

const Profile = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor: 'white',  flex: 1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.profileImageContainer}>
                    <LinearGradient colors={['#0150EC', '#B974F5']} style={styles.profileImageInnerContainer}>
                <Image style={styles.profileImage} source={require('../../assets/images/default_profile.png')} />
                    </LinearGradient>
                </View>
                <View style={styles.userNameContainer}>
                <Text style={styles.userNameText} >Emmanuel Robertsen</Text>
                </View>
                <View style={styles.userAttributesOuterContainer}>
                    <View >
                        <Text style={styles.statAmount}>45</Text>
                        <Text style={styles.statType}>Following</Text>
                    </View>
                    <View style={styles.statBorder}></View>
                    <View >
                        <Text style={styles.statAmount}>30M</Text>
                        <Text style={styles.statType}>Followers</Text>
                    </View>
                    <View style={styles.statBorder}></View>
                    <View >
                        <Text style={styles.statAmount}>100</Text>
                        <Text style={styles.statType}>Posts</Text>
                    </View>
                </View>
                <View style={{flex: 1}}>
                    <ProfileTabsNavigation/>
                </View>
                </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    profileImage: {
        width: horizontalScale(110),
        height: horizontalScale(110),
        borderRadius: 110
    },
    profileImageContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: verticalScale(32)
    },
    profileImageInnerContainer: {
        borderRadius: 110,
        padding: horizontalScale(5)
    },
    userNameContainer: {
        marginTop: verticalScale(20),
        flexDirection: 'row',
        justifyContent: 'center'
    },
    userNameText: {
        color: 'black',
        fontFamily: getFontFamily('Inter_18pt', '600'),
        fontSize: scaleFontSize(20),
    },
    userAttributesOuterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(40),
        marginVertical: verticalScale(30),
        borderBottomWidth: 1,
        paddingBottom: verticalScale(20),
        borderColor: '#E9EFF1',
    },
    statAmount: {
        fontFamily: getFontFamily('Inter_18pt', '600'),
        fontSize: scaleFontSize(20),
        color: '#022150',
        textAlign: "center"
    },
    statType: {
        fontFamily: getFontFamily('Inter_18pt', '400'),
        fontSize: scaleFontSize(16),
        color: '#79869F',
        textAlign: 'center'
    },
    statBorder: {
        borderRightWidth: 1,
        borderColor: '#E9EFF1',
    }
})
export default Profile
