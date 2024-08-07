import {Text, View, StyleSheet} from "react-native";
import {horizontalScale, scaleFontSize} from "../style";
import {getFontFamily} from "../../assets/fonts/helper";

const ReceivedChatMessage = (props) => {
    return (
        <View style={styles.receivedMessage}>
            <Text style={styles.receivedMessageText}>{props.message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    receivedMessage: {
        backgroundColor: '#F35BAC',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        marginTop: horizontalScale(15),
    },
    receivedMessageText: {
        fontSize: scaleFontSize(17),
        fontFamily: getFontFamily('Inter_18pt', '500'),
        lineHeight: 20,
        fontWeight: '500',
        color: 'white',
        padding: horizontalScale(20),
    },
})

export default ReceivedChatMessage;
