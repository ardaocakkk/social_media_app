import {FlatList, SafeAreaView, StyleSheet, Text, View} from "react-native";
import {horizontalScale, scaleFontSize, verticalScale} from "../../components/style";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {getFontFamily} from "../../assets/fonts/helper";
import {useEffect, useState} from "react";
import ReceivedMessage from "../../components/Message/ReceivedMessage";
import SearchBox from "../../components/Input/SearchBox/SearchBox";
import {useNavigation} from "@react-navigation/native";

const Messages = ({navigation}) => {


    const userMessage = [
        {
        id: 1,
        name: 'Emmanuel Robertsen',
        message: 'Hello, how are you?',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
            id: 1,
            message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                    id: 2,
                    message: 'Are you there?',
                    time: new Date().toISOString().slice(14,19),
                }
            ],
            status: 'Online',
        },
        {
        id: 2,
        name: 'John Doe',
        message: 'Hello, how are you?',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
                id: 1,
                message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                id: 2,
                message: 'Are you there?',
                time: new Date().toISOString().slice(14,19),
            }
            ],
            status: 'Online',
        },
        {
        id: 3,
        name: 'Jane Doe',
        message: 'Hello, how are you?',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
                id: 1,
                message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                id: 2,
                message: 'Are you there?',
                time: new Date().toISOString().slice(14,19),
            }
            ],
            status: 'Online',
        },
        {
        id: 4,
        name: 'Emmanuel Robertsen',
        message: 'Hello, how are you?',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
                id: 1,
                message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                id: 2,
                message: 'Are you there?',
                time: new Date().toISOString().slice(14,19),
            }
            ],
            status: 'Online',
        },
        {
        id: 5,
        name: 'Jurgen Klopp',
        message: 'There will be team meeting at 3pm',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
                id: 1,
                message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                id: 2,
                message: 'Are you there?',
                time: new Date().toISOString().slice(14,19),
            }
            ],
            status: 'Online',
        },
        {
        id: 6,
            name: 'Alexander Arnold',
            message: 'Be ready for the match tomorrow',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
                id: 1,
                message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                id: 2,
                message: 'Are you there?',
                time: new Date().toISOString().slice(14,19),
            }
            ],
            status: 'Online',
        },
        {
            id: 7,
            name: 'Roberto Firmino',
            message: 'Im the best striker in the world',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
                id: 1,
                message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                id: 2,
                message: 'Are you there?',
                time: new Date().toISOString().slice(14,19),
            }
            ],
            status: 'Online',
        },
        {
            id: 8,
            name: 'Mohammad Salah',
            message: 'I will score a hatrick tomorrow',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
                id: 1,
                message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                id: 2,
                message: 'Are you there?',
                time: new Date().toISOString().slice(14,19),
            }
            ],
            status: 'Online',
        },
        {
            id: 9,
            name: 'Mohammad Salah',
            message: 'I will score a hatrick tomorrow',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
                id: 1,
                message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                id: 2,
                message: 'Are you there?',
                time: new Date().toISOString().slice(14,19),
            }
            ],
            status: 'Online',
        },
        {
            id: 10,
            name: 'Mohammad Salah',
            message: 'I will score a hatrick tomorrow',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
                id: 1,
                message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                id: 2,
                message: 'Are you there?',
                time: new Date().toISOString().slice(14,19),
            }
            ],
            status: 'Online',
        },
        {
            id: 11,
            name: 'Mohammad Salah',
            message: 'I will score a hatrick tomorrow',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
                id: 1,
                message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                id: 2,
                message: 'Are you there?',
                time: new Date().toISOString().slice(14,19),
            }
            ],
            status: 'Online',
        },
        {
            id: 12,
            name: 'Mohammad Salah',
            message: 'I will score a hatrick tomorrow',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
                id: 1,
                message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                id: 2,
                message: 'Are you there?',
                time: new Date().toISOString().slice(14,19),
            }
            ],
            status: 'Online',
        },
        {
            id: 13,
            name: 'Mohammad Salah',
            message: 'I will score a hatrick tomorrow',
            time: new Date().toISOString().slice(14,19),
            image: require('../../assets/images/default_profile.png'),
            receivedMessages: [{
                id: 1,
                message: 'Hello, how are you?',
                time: new Date().toISOString().slice(14,19),
            }, {
                id: 2,
                message: 'Are you there?',
                time: new Date().toISOString().slice(14,19),
            }
            ],
            status: 'Online',
        }
    ]


    const userMessageSize = 10;
    const [userMessageCurrentPage, setUserMessageCurrentPage] = useState(1)
    const [userMessageRenderedData, setUserMessageRenderedData] = useState([])
    const [isLoadingMessage, setIsLoadingMessage] = useState(false);4

    const pagination = (database, currentPage, pageSize) => {
        const startIndex = (currentPage -1) * pageSize
        const endIndex = startIndex + pageSize;
        if(startIndex >= database.length) {
            return [];
        }
        return database.slice(startIndex,endIndex)
    }

    useEffect(() => {
        setIsLoadingMessage(true);
        const getInitialData = pagination(userMessage, 1, userMessageSize);
        setUserMessageRenderedData(getInitialData);
        console.log(userMessageRenderedData)
        setIsLoadingMessage(false)
    }, []);

    const [searchedMessage, setSearchedMessage] = useState('')

    const handleSearchedMessage = (text) => {
        setSearchedMessage(text);
        setUserMessageRenderedData(userMessage.filter((message) => message.name.toLowerCase().includes(text.toLowerCase())))
    }

    return (
        <SafeAreaView style={styles.messageScreenContainer}>
            <SearchBox searchedMessage={searchedMessage} handleSearch={handleSearchedMessage} placeHolder={'Find a Chat'} />
                <View style={styles.messagesContainer}>
                <View style={styles.messagesStatusContainer}>
                    <Text style={styles.messagesTitle}>Messages</Text>
                    <Text style={styles.messageCountText}>({userMessage.length})</Text>
                </View>
            </View>
            <FlatList showsVerticalScrollIndicator={false} onEndReachedThreshold={0.5} onEndReached={() => {
                console.log("End reached")
                if(isLoadingMessage) return;
                setIsLoadingMessage(true);
                const contentToAppend = pagination(userMessage, userMessageCurrentPage + 1, userMessageSize)
                if(contentToAppend.length > 0) {
                    setUserMessageCurrentPage(userMessageCurrentPage + 1);
                    setUserMessageRenderedData(prev => [...prev, ...contentToAppend])
                }
                setIsLoadingMessage(false)
            }} data={userMessageRenderedData} renderItem={(item) =>
                <ReceivedMessage
                    status={item.item.status}
                    key={item.item.id}
                    name={item.item.name}
                    message={item.item.message}
                    time={item.item.time}
                    image={item.item.image}
                    receivedMessages={item.item.receivedMessages}
                />
            }/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    messageScreenContainer: {
        flex : 1,
        backgroundColor: 'white'
    },
    findMessageBox:{
        marginTop: verticalScale(17),
        marginHorizontal: "auto",
        borderRadius: 200,
        width: horizontalScale(327),
        height: verticalScale(50),
        backgroundColor: '#F7FBFE',
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderColor: '#EFF2F6'
    },
    flatListStyle: {
      justifyContent: 'center',
        alignItems: 'center'
    },
    magnifierIcon: {
        marginLeft: horizontalScale(20),
    },
    searchContainer: {
        flexDirection: 'row',
    },
    searchText: {
        marginLeft: horizontalScale(6),
        fontSize: scaleFontSize(16),
        fontFamily: getFontFamily('Inter_18pt', '500'),
        color: '#79869F'
    },
    messagesContainer: {
        marginLeft: horizontalScale(25),
        marginTop: verticalScale(25),
    },
    messagesTitle: {
        color: '#102C56',
        fontSize: scaleFontSize(18),
        lineHeight: 28,
        fontFamily: getFontFamily('Inter_18pt', '700')
    },
    messagesStatusContainer: {
        flexDirection: 'row',
        alignItems:'center'
    },
    messageCountText: {
        marginLeft: horizontalScale(7),
        color: '#FD92C6',
        fontFamily: getFontFamily('Inter_18pt', '300'),
        fontSize: scaleFontSize(16),
        textAlign: 'center'
    }
})

export default Messages;
