import {createStackNavigator} from "@react-navigation/stack";
import {Routes} from "./Routes";
import Home from "../screen/home/Home.jsx";
import Profile from "../screen/Profile/Profile";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import ProfileTabTitle from "../components/ProfileTabTitle/ProfileTabTitle";
import ProfileTabContent from "../components/ProfileTabContent/ProfileTabContent";
import Messages from "../screen/messages/Messages";
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHome, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {horizontalScale, verticalScale} from "../components/style";
import Search from "../screen/search/Search";
import Chat from "../screen/messages/Chat";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();
const BottomTabs = createMaterialBottomTabNavigator();



export const BottomTabsNavigation = () => {
    return (
        <BottomTabs.Navigator activeIndicatorStyle={
            {
                width: horizontalScale(25),
                height: verticalScale(25),
                padding: horizontalScale(5),
            }
        } barStyle={{
            backgroundColor:'transparent',
            width: 'full',
        }} activeColor={'#7D8AAA'} initialRouteName={Routes.Home} screenOptions={{
        }}>
            <BottomTabs.Screen options={{
                tabBarIcon: ({color}) => <FontAwesomeIcon icon={faHome} size={20} color={color} />
            }}  name={Routes.Home} component={Home} />
            <BottomTabs.Screen options={{
                tabBarIcon: ({color}) => <FontAwesomeIcon icon={faSearch} size={20} color={color} />
            }} name={Routes.Search} component={Search}  />
            <BottomTabs.Screen options={{
                tabBarIcon: ({color}) => <FontAwesomeIcon icon={faUser} size={20} color={color} />
            }} name={Routes.Profile} component={Profile} />

        </BottomTabs.Navigator>
    )
}

export const ProfileTabsNavigation = () => {
    return (
        <ProfileTabs.Navigator screenOptions={{
            tabBarIndicatorStyle: {
                backgroundColor: 'transparent',
                zIndex: 0,
                elevation: 0,
            }
        }}>
        <ProfileTabs.Screen options={{
            tabBarLabel : ({focused}) => <ProfileTabTitle isFocused={focused} title={'Photos'} />
        }} name={'Tab1'} component={ProfileTabContent} />
        <ProfileTabs.Screen options={{
            tabBarLabel: ({focused}) => <ProfileTabTitle isFocused={focused} title={'Videos'}/>
        }} name={'Tab2'} component={ProfileTabContent} />
        <ProfileTabs.Screen options={{
            tabBarLabel: ({focused}) => <ProfileTabTitle isFocused={focused} title={'Saved'} />
        }} name={'Tab3'} component={ProfileTabContent} />
        </ProfileTabs.Navigator>
    )
}

const MainMenuNavigation = () => {
    return (
        <Drawer.Navigator screenOptions={{header: () => null, headerShown: false}}>
            <Drawer.Screen name={'BottomTab'} component={BottomTabsNavigation} />
            <Drawer.Screen name={Routes.Home} component={Home} />
            <Drawer.Screen name={Routes.Profile} component={Profile} />

        </Drawer.Navigator>
    )
}

const MainNavigation = () => {
    return <Stack.Navigator
        screenOptions={{header: () => null, headerShown: false}}
        initialRouteName={'BottomTabs'}>
        <Stack.Screen name={'BottomTabs'} component={BottomTabsNavigation} />
        <Stack.Screen name={Routes.Messages} component={Messages} />
        <Stack.Screen name={Routes.Chat} component={Chat} />
        <Stack.Screen name={Routes.Search} component={Search} />
        <Stack.Screen name={Routes.Profile} component={Profile} />
        <Stack.Screen name={Routes.Home} component={Home} />
        </Stack.Navigator>
}

export default MainNavigation
