import {Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, FlatList} from "react-native";
import {horizontalScale, scaleFontSize, verticalScale} from "../../components/style";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faArrowLeft, faPhone, faVideo} from "@fortawesome/free-solid-svg-icons";
import {getFontFamily} from "../../assets/fonts/helper";
import SearchBox from "../../components/Input/SearchBox/SearchBox";
import MessageInputField from "../../components/Input/MessageInput/MessageInputField";
import ReceivedChatMessage from "../../components/Chat/ReceivedChatMessage";

const Chat = ({ route, navigation }) => {
    console.log(route.params);
    const params = route.params;
    return (
        <SafeAreaView style={styles.safeAreaView}>
          <View style={styles.chatBoxOuterContainer} >
              <View style={styles.chatBoxInnerContainer}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
              <View>
                  <FontAwesomeIcon icon={faArrowLeft} size={26} color={'#022150'} />
              </View>
                  </TouchableOpacity>
              <View style={styles.senderInfoBox} >
                  <TouchableOpacity>
                  <Image source={params.image} style={{width: horizontalScale(48), height: horizontalScale(48)}}/>
                  </TouchableOpacity>
                      <View style={styles.senderInfoTextBox}>
                          <TouchableOpacity>
                      <Text style={styles.senderInfoNameText}>{params.name.toString().match(/^(\S+)\s(.*)/).slice(2)}</Text>
                          </TouchableOpacity>
                              <Text style={styles.senderStatusText}>{params.status}</Text>
                  </View>
              </View>
              <View style={styles.callBox}>
                  <TouchableOpacity>
                  <View style={styles.iconBox}>
                    <FontAwesomeIcon icon={faPhone} size={26} color={'#375767'} />
                  </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                  <View style={[styles.iconBox, {marginLeft: horizontalScale(10)}]}>
                    <FontAwesomeIcon color={'#375767'} style={{marginLeft: horizontalScale(10)}} icon={faVideo} size={26} />
                  </View>
                  </TouchableOpacity>
              </View>
              </View>
              <View style={styles.chatContentContainer}>
              <View style={styles.chatContentBox}>
                  <FlatList data={route.params.receivedMessages} renderItem={(item) => <ReceivedChatMessage message={item.item.message}/>} keyExtractor={(item) => item.id}/>
                  <View style={styles.sentMessage}>
                      <Text style={styles.sentMessageText}>Hi,. It is very nice to meet you.</Text>
                  </View>
              </View>
              <View style={styles.inputContainer}>
                  <MessageInputField/>
              </View>
          </View>
          </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: 'white',
    },
    chatBoxOuterContainer: {
        flex: 1,
        marginHorizontal: horizontalScale(25),
        marginTop: verticalScale(20),
    },
    chatBoxInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    senderInfoBox: {
        marginLeft: horizontalScale(10),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    senderInfoTextBox: {
        marginLeft: horizontalScale(9),
    },
    senderInfoNameText: {
        fontFamily: getFontFamily('Inter_18pt', '500'),
        fontSize: scaleFontSize(18),
        color: '#022150',
    },
    senderStatusText: {
      fontFamily: getFontFamily('Inter_18pt', '400'),
        fontSize: scaleFontSize(12),
        color: '#A8AFC0',
    },
    callBox: {
        marginLeft: horizontalScale(30),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconBox: {
        borderWidth: 1,
        width: 52,
        height: 52,
        borderRadius: 20,
        borderColor: '#EFEFEF',
        justifyContent: 'center',
        marginHorizontal:'auto',
        alignItems: 'center'
    },
    chatContentBox: {
        marginTop: verticalScale(60),
        flexDirection: 'column',
    },
    receivedMessage: {
        backgroundColor: '#F35BAC',
        borderBottomRightRadius: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    sentMessage: {
        backgroundColor: '#F7FBFE',
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: verticalScale(15),
        marginLeft: horizontalScale(50),
    },
    receivedMessageText: {
      fontSize: scaleFontSize(17),
        fontFamily: getFontFamily('Inter_18pt', '500'),
        lineHeight: 20,
        fontWeight: '500',
        color: 'white',
        padding: horizontalScale(20),
    },
    sentMessageText: {
        fontSize: scaleFontSize(17),
        fontFamily: getFontFamily('Inter_18pt', '500'),
        lineHeight: 20,
        fontWeight: '500',
        color: '#022150',
        padding: horizontalScale(20),
    },
    inputContainer: {
        borderTopWidth: 1,
        borderColor: '#ccc',
        padding: 10,
    },
    chatContentContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
})

export default Chat;
