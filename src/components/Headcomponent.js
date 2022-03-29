import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../Screen/HomeScreen/Homescreen';
import styling from '../../css/styling'
import Friendrequest from '../Screen/friendriquest/Friendrequest';

const Tab = createMaterialTopTabNavigator()

function Component1({ navigation }) {
    return (

        <>
            {/* this is our mian head view  */}
            <View >

                < View style={styling.mainline} >
                    {/* This is brand name */}
                    <View style={{ flex: 0.4, padding: 5 }}>
                        <Text style={styling.brandname}>facebook</Text>
                    </View>

                    <View style={[styling.logoflex, { flex: 0.6, padding: 5 }]}>
                        {/* this is search icon */}
                        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                            <View style={styling.searchlogo}>
                                <Image source={require('../assets/Images/search.png')} style={styling.logo} />
                            </View>
                        </TouchableOpacity>
                        {/* this is user profile */}
                        <View style={styling.searchlogo}>
                            <TouchableOpacity onPress={() => navigation.navigate('Abhi Thakur')}><Image source={require('../assets/Images/profile.png')} style={styling.profile} /></TouchableOpacity>
                        </View>
                        {/* this is use profile menu */}
                        <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
                            <View style={styling.searchlogo}>
                                <Image source={require('../assets/Images/menu.png')} style={styling.logo} />
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>


            </View >

            <Tab.Navigator screenOptions={{ tabBarShowLabel: false, swipeEnabled: false, tabBarIndicatorStyle: { backgroundColor: "transparent" }, tabBarPressColor: "white" }}>
                <Tab.Screen name="1" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/Images/home.png')} style={{ height: 20, width: 20, marginTop: 5, tintColor: focused ? '#1e90ff' : 'grey' }} />
                    ), tabBarItemStyle: { height: 40, },

                }} />
                <Tab.Screen name="2" component={Friendrequest} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/Images/people.png')} style={{ height: 20, width: 20, marginTop: 5, tintColor: focused ? '#1e90ff' : 'grey' }} />
                    ), tabBarItemStyle: { height: 40, },

                }} />
                <Tab.Screen name="3" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/Images/message.png')} style={{ height: 20, width: 20, marginTop: 5, tintColor: focused ? '#1e90ff' : 'grey' }} />
                    ), tabBarItemStyle: { height: 40, }

                }} />
                <Tab.Screen name="4" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/Images/notification.png')} style={{ height: 20, width: 20, marginTop: 5, tintColor: focused ? '#1e90ff' : 'grey' }} />
                    ), tabBarItemStyle: { height: 40, }

                }} />
                <Tab.Screen name="5" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/Images/tv.png')} style={{ height: 20, width: 20, marginTop: 5, tintColor: focused ? '#1e90ff' : 'grey' }} />
                    ), tabBarItemStyle: { height: 40, }

                }} />
                <Tab.Screen name="6" component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={require('../assets/Images/shop.png')} style={{ height: 20, width: 20, marginTop: 5, tintColor: focused ? '#1e90ff' : 'grey' }} />
                    ), tabBarItemStyle: { height: 40, }

                }} />

            </Tab.Navigator>

        </>
    )
}

export default Component1