import {Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity} from "react-native";
import {verticalScale, horizontalScale, scaleFontSize} from "../../style";
import {getFontFamily} from "../../../assets/fonts/helper";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCamera, faShare, faSmile} from "@fortawesome/free-solid-svg-icons";
import {get} from "react-native/Libraries/TurboModule/TurboModuleRegistry";

const MessageInputField = () => {
    return (
        <View style={styles.inputOuterContainer}>
            <View style={styles.inputEmojiContainer}>
                <TouchableOpacity>
                  <FontAwesomeIcon icon={faCamera} size={24} color={'#8E9BB7'} />
                </TouchableOpacity>
                  <View style={styles.emojiDivider}></View>
                <TouchableOpacity>
                <FontAwesomeIcon style={{marginLeft: horizontalScale(5)}} icon={faSmile} size={24} color={'#8E9BB7'} />
                </TouchableOpacity>
                </View>
            <View style={styles.inputFieldBox}>
                <TextInput style={styles.textInputText} placeholder={'Type a Message...'} />
            </View>
            <View>
                <TouchableOpacity>
                <FontAwesomeIcon icon={faShare} size={24} color={'#F35BAC'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    inputOuterContainer: {
        flexDirection: "row",
        backgroundColor: '#F7FBFE',
        justifyContent: 'space-between',
        padding: horizontalScale(15),
        borderRadius: 200,
        height: height * 0.1,

    },
    emojiDivider: {
      borderRightWidth: 1,
      borderColor: '#8E9BB7',
        marginLeft: horizontalScale(5),

    },
    inputEmojiContainer: {
        flexDirection: "row",
        height: height * 0.03,
    },
    inputFieldBox: {
        flexDirection: "row",
        width: width * 0.4,
        margin:0,
        padding:0,

    },
    textInputText: {
        fontFamily: getFontFamily('Inter_18pt', '500'),
        fontSize: scaleFontSize(15),
        color: '#A8AFC0',
        margin: 0,
        padding: 0,
    }
})


export default MessageInputField;
