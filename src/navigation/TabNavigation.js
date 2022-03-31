import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screen/HomeScreen/Homescreen';
import styling from '../styles/styling'
import Friendrequest from '../Screen/friendriquest/Friendrequest';
import { images } from '../assets/Pics';
import Headpart from '../components/Headpart';


const Tab = createMaterialTopTabNavigator()

function Component1({ navigation }) {
    return (

        <>

            <Headpart navigation={navigation} />
            {/* -----------------------------------------------------------TAb Conatiner----------------------------------------------------- */}
            <Tab.Navigator screenOptions={{ tabBarShowLabel: false, swipeEnabled: false, tabBarIndicatorStyle: { backgroundColor: "transparent" }, tabBarPressColor: "white" }}>
                <Tab.Screen name="1" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={images.Home} style={{ height: 20, width: 20, marginTop: 5, tintColor: focused ? '#1e90ff' : 'grey' }} />
                    ), tabBarItemStyle: { height: 40, },

                }} />
                <Tab.Screen name="2" component={Friendrequest} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={images.Friends} style={{ height: 20, width: 20, marginTop: 5, tintColor: focused ? '#1e90ff' : 'grey' }} />
                    ), tabBarItemStyle: { height: 40, },

                }} />
                <Tab.Screen name="3" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={images.Chat} style={{ height: 20, width: 20, marginTop: 5, tintColor: focused ? '#1e90ff' : 'grey' }} />
                    ), tabBarItemStyle: { height: 40, }

                }} />
                <Tab.Screen name="4" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={images.Notification} style={{ height: 20, width: 20, marginTop: 5, tintColor: focused ? '#1e90ff' : 'grey' }} />
                    ), tabBarItemStyle: { height: 40, }

                }} />
                <Tab.Screen name="5" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={images.Tv} style={{ height: 20, width: 20, marginTop: 5, tintColor: focused ? '#1e90ff' : 'grey' }} />
                    ), tabBarItemStyle: { height: 40, }

                }} />
                <Tab.Screen name="6" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={images.Shop} style={{ height: 20, width: 20, marginTop: 5, tintColor: focused ? '#1e90ff' : 'grey' }} />
                    ), tabBarItemStyle: { height: 40, }

                }} />

            </Tab.Navigator>

        </>
    )
}

export default Component1