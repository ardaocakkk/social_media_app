import {StyleSheet} from "react-native";
import {getFontFamily} from "../../assets/fonts/helper";
import {scaleFontSize} from "../style";

const styles = StyleSheet.create({
    title: {
        fontFamily: getFontFamily("Inter_18pt", "600"),
        color: "#022150",
        fontSize: scaleFontSize(24),

    },
})

export default styles
