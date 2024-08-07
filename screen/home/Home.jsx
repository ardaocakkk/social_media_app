import {SafeAreaView, Text, View, StyleSheet, TouchableOpacity, FlatList} from "react-native";
import {getFontFamily} from "../../assets/fonts/helper";
import Title from "../../components/Title/Title";
import Icon from "@react-native-vector-icons/fontawesome6";
import UserStory from "../../components/UserStory/UserStory";
import {useEffect, useState} from "react";
import UserPost from "../../components/UserPost/UserPost";
import {horizontalScale, scaleFontSize, verticalScale} from "../../components/style";
import {NavigationContainer} from "@react-navigation/native";
import {BottomTabsNavigation} from "../../navigation/MainNavigation";

const Home = ({navigation}) => {
    const userStories = [
        {
            firstName: "Joseph",
            id: 1,
            profile_img: require("../../assets/images/default_profile.png")
        },
        {
            firstName: "Angel",
            id: 2,
            profile_img: require("../../assets/images/default_profile.png")
        },
        {
            firstName: "White",
            id: 3,
            profile_img: require("../../assets/images/default_profile.png")
        },
        {
            firstName: "Olivier",
            id: 4,
            profile_img: require("../../assets/images/default_profile.png")
        },
        {
            firstName: "Nata",
            id: 5,
            profile_img: require("../../assets/images/default_profile.png")
        },
        {
            firstName: "Nicolas",
            id: 6,
            profile_img: require("../../assets/images/default_profile.png")
        },
        {
            firstName: "Nina",
            id: 7,
            profile_img: require("../../assets/images/default_profile.png")
        },
        {
            firstName: "Nana",
            id: 8,
            profile_img: require("../../assets/images/default_profile.png")
        },
        {
            firstName: "Adam",
            id: 9,
            profile_img: require("../../assets/images/default_profile.png")
        },
    ]
    const userPosts = [
        {
            id: 1,
            firstName: 'Allison',
            lastName: 'Becker',
            location: 'Boston, MA',
            image: require('../../assets/images/default_post.png'),
            profile_img: require("../../assets/images/default_profile.png"),
            likes: 1201,
            comments: 21,
            bookmarks: 55
        },        {
            id: 2,
            firstName: 'Jennifer',
            lastName: 'Wilkson',
            location: 'Worcester, MA',
            image: require('../../assets/images/default_post.png'),
            profile_img: require("../../assets/images/default_profile.png"),
            likes: 1301,
            comments: 25,
            bookmarks: 70
        },
        {
            id: 3,
            firstName: 'Adam',
            lastName: 'Spera',
            location: 'Worcester, MA',
            image: require('../../assets/images/default_post.png'),
            profile_img: require("../../assets/images/default_profile.png"),
            likes: 100,
            comments: 8,
            bookmarks: 3
        },
        {
            id: 4,
            firstName: 'Arda',
            lastName: 'Ocak',
            location: 'Cankaya, Turkey',
            image: require('../../assets/images/default_post.png'),
            profile_img: require("../../assets/images/default_profile.png"),
            likes: 1201,
            comments: 21,
            bookmarks: 55
        },
        {
            id: 5,
            firstName: 'Nicolas',
            lastName: 'Namorazde',
            location: 'Boston, MA',
            image: require('../../assets/images/default_post.png'),
            profile_img: require("../../assets/images/default_profile.png"),
            likes: 2999,
            comments: 300,
            bookmarks: 123
        },
        {
            id: 6,
            firstName: 'Nicolas',
            lastName: 'Namorazde',
            location: 'Boston, MA',
            image: require('../../assets/images/default_post.png'),
            profile_img: require("../../assets/images/default_profile.png"),
            likes: 2999,
            comments: 300,
            bookmarks: 123
        },
        {
            id: 7,
            firstName: 'Nicolas',
            lastName: 'Namorazde',
            location: 'Boston, MA',
            image: require('../../assets/images/default_post.png'),
            profile_img: require("../../assets/images/default_profile.png"),
            likes: 2999,
            comments: 300,
            bookmarks: 123
        },
        {
            id: 8,
            firstName: 'Nicolas',
            lastName: 'Namorazde',
            location: 'Boston, MA',
            image: require('../../assets/images/default_post.png'),
            profile_img: require("../../assets/images/default_profile.png"),
            likes: 2999,
            comments: 300,
            bookmarks: 123
        },
        {
            id: 9,
            firstName: 'Nicolas',
            lastName: 'Namorazde',
            location: 'Boston, MA',
            image: require('../../assets/images/default_post.png'),
            profile_img: require("../../assets/images/default_profile.png"),
            likes: 2999,
            comments: 300,
            bookmarks: 123
        },

    ]
    const userStoriesPageSize = 4;
    const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1)
    const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([])
    const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

    const userPostsSize = 4;
    const [userPostsCurrentPage, setUserPostsPage] = useState(1)
    const [userPostsRenderedData, setUserPostsData] = useState([])
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);

    const pagination = (database, currentPage, pageSize) => {
        const startIndex = (currentPage -1) * pageSize
        const endIndex = startIndex + pageSize;
        if(startIndex >= database.length) {
            return [];
        }
        return database.slice(startIndex,endIndex)
    }

    useEffect(() => {
        setIsLoadingUserStories(true);
        const getInitialData = pagination(userStories, 1, userStoriesPageSize);
        setUserStoriesRenderedData(getInitialData);
        console.log(userStoriesRenderedData)
        setIsLoadingUserStories(false)
    }, []);

    useEffect(() => {
        setIsLoadingPosts(true)
        const getInitialData = pagination(userPosts, 1, userPostsSize)
        setUserPostsData(getInitialData)
        setIsLoadingPosts(false)
    }, []);
    return (
            <SafeAreaView style={{backgroundColor: 'white'}}>

                <View style={styles.postContainer}>
                    <FlatList
                        ListHeaderComponent={
                            <>
                                <View style={styles.header}>
                                    <Title>Let's Explore</Title>
                                    <TouchableOpacity style={styles.envelopeIcon} onPress={() => {navigation.navigate('Messages'), {screen: 'Messages'}}}>
                                        <Icon name={'envelope'} size={scaleFontSize(24)} color={'#898DAE'}/>
                                        <View style={styles.envelopeNumberContainer}>
                                            <Text style={styles.envelopeNumber}>2</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.userStoryContainer}>
                                    <FlatList
                                        onEndReachedThreshold={0.5}
                                        onEndReached={() => {
                                            if(isLoadingUserStories) return;
                                            setIsLoadingUserStories(true);
                                            const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize)
                                            if(contentToAppend.length > 0) {
                                                setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                                                setUserStoriesRenderedData(prev => [...prev, ...contentToAppend])
                                            }
                                            setIsLoadingUserStories(false)
                                        }}
                                        horizontal={true}
                                        showsHorizontalScrollIndicator={false}
                                        data={userStoriesRenderedData}
                                        renderItem={(item) => <UserStory
                                            key={item.item.id}
                                            firstName={item.item.firstName}
                                            post_image={item.item.image}
                                            id={item.item.id}
                                            profile_img={item.item.profile_img}


                                        /> } />
                                </View>
                            </>
                        }
                        onEndReached={() =>{
                            if(isLoadingPosts) return;
                            setIsLoadingPosts(true)
                            const newData = pagination(userPosts, userPostsCurrentPage + 1, userPostsSize);
                            if(newData.length > 0) {
                                setUserPostsPage(userPostsCurrentPage + 1)
                                setUserPostsData(prev => [...prev, ...newData])
                            }
                            setIsLoadingPosts(false)
                        }}
                        onEndReachedThreshold={0.5}
                        showsVerticalScrollIndicator={false} data={userPostsRenderedData} renderItem={(item) => {
                        return(
                            <UserPost
                                firstName={item.item.firstName}
                                lastName={item.item.lastName}
                                location={item.item.location}
                                post_image={item.item.image}
                                profile_img={item.item.profile_img}
                                likes={item.item.likes}
                                comments={item.item.comments}
                                bookmarks={item.item.bookmarks}
                            />
                        )
                    }}


                    />
                </View>
            </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        marginTop: verticalScale(30),
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
    },
    envelopeIcon: {
        padding: 14,
        backgroundColor: "#F9FAFB",
        borderRadius: 100,
    },
    envelopeNumberContainer:{
        backgroundColor: "#F35BAC",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: 10,
        height: 10,
        borderRadius: 10,
        position: "absolute",
        right:10,
        top: 14,

    },
    envelopeNumber: {
        color: "white",
        fontSize: scaleFontSize(6),
        fontFamily: getFontFamily("Inter_18pt", "600"),
    },
    userStoryContainer: {
        marginTop: verticalScale(12),

    },
    postContainer: {
        marginHorizontal: horizontalScale(24),
    }
})

export default Home;
