import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import {horizontalScale, scaleFontSize, verticalScale} from "../style";
import {getFontFamily} from "../../assets/fonts/helper";
import {useNavigation} from "@react-navigation/native";

const ReceivedMessage = ({name, message, key, time, image, receivedMessages, status}) => {
    const navigation = useNavigation();
    function handlePress() {
        navigation.navigate('Chat', {
            id: key,
            name: name,
            message: message,
            time: time,
            image: image,
            receivedMessages: receivedMessages,
            status: status
        })
    }

    return(
    <TouchableOpacity onPress={handlePress} >
    <View style={styles.messageOuterContainer}>
        <View style={styles.messageInnerContainer}>
            <View>
                <Image source={image} style={{width: horizontalScale(48), height: verticalScale(48)}}/>
            </View>
            <View style={styles.messageTextContainer}>
                <View style={{width: horizontalScale(225)}}>
                    <View style={{flexDirection: 'row', justifyContent:'space-between'}}>
                        <Text style={styles.messageSenderText}>{name}</Text>
                        <View>
                            <Text style={styles.receivedMessageText}>{time}</Text>
                        </View>
                    </View>
                    <Text style={styles.receivedMessageText}>{message}</Text>
                </View>

            </View>
        </View>
    </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    messageOuterContainer: {
        marginTop: verticalScale(17),
        marginHorizontal: horizontalScale(25)
    },
    messageInnerContainer: {
        marginHorizontal: horizontalScale(8),
        flexDirection: 'row',
    },
    messageTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: horizontalScale(16),
    },
    messageSenderText:{
        fontFamily: getFontFamily('Inter_18pt', '500'),
        fontSize: scaleFontSize(14),
        color: '#1C2D57',
    },
    receivedMessageText: {
        fontFamily: getFontFamily('Inter_18pt', '500'),
        fontSize: scaleFontSize(14),
        color: '#8A94A4'
    }
})

export default ReceivedMessage;
