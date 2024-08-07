import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowLeft, faSearch} from "@fortawesome/free-solid-svg-icons";
import {horizontalScale, scaleFontSize, verticalScale} from "../../style";
import {getFontFamily} from "../../../assets/fonts/helper";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";




const SearchBox = ({searchedMessage,handleSearch, placeHolder}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.findMessageBox}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{justifyContent: 'center', alignItems:'center'}}>
                <FontAwesomeIcon icon={faArrowLeft} size={26} color={'#022150'} />
            </View>
            </TouchableOpacity>
            <View style={styles.searchContainer}>
                <FontAwesomeIcon style={styles.magnifierIcon} icon={faSearch}/>
                <TextInput
                    style={styles.searchText}
                    value={searchedMessage}
                    onChangeText={handleSearch}
                    placeholder={placeHolder}/>
            </View>
        </View>
    )
}

export default SearchBox

const styles = StyleSheet.create({
    findMessageBox:{
        marginTop: verticalScale(17),
        marginHorizontal: "auto",
        borderRadius: 200,
        width: horizontalScale(327),
        height: verticalScale(50),
        backgroundColor: '#F7FBFE',
        justifyContent: 'center',
        borderColor: '#EFF2F6',
        flexDirection: "row",
        alignItems: 'center',
    },
    magnifierIcon: {
        marginLeft: horizontalScale(20),
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    searchText: {
        marginLeft: horizontalScale(6),
        fontSize: scaleFontSize(16),
        fontFamily: getFontFamily('Inter_18pt', '500'),
        width: horizontalScale(250),
        alignItems: 'center',
        color: '#79869F'
    },
})
