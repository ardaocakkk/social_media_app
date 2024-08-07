import {Text, StyleSheet} from "react-native";
import {getFontFamily} from "../../assets/fonts/helper";
import {horizontalScale, scaleFontSize} from "../style";

const ProfileTabTitle = ({title, isFocused}) => {
    return (
        <Text style={[styles.title, !isFocused && styles.titleNotFocused]}>{title}</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: getFontFamily('Inter_18pt', '500'),
        color: '#022150',
        fontSize: scaleFontSize(16),
        padding: horizontalScale(10)
    },
    titleNotFocused: {
        fontFamily: getFontFamily('Inter_18pt', '500'),
        color: '#79869F',
        fontSize: scaleFontSize(16),
    }
})

export default ProfileTabTitle
