import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import Headcomponent from '../components/Headcomponent'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../Screen/profileScreen/Profilemains'
import MenuScreen from '../Screen/menu/MenuScreen'
import Search from '../Screen/search/Search'



const Stack = createStackNavigator();
function Stacknavigation() {
    return (


        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Headcomponent} />
            <Stack.Screen name="Abhi Thakur" component={Profile} options={{ headerShown: true }} />
            <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: true, headerTitle: "", headerTransparent: true, headerBackButtonMenuEnables: false }} />
            <Stack.Screen name="Search" component={Search} />
        </Stack.Navigator>
    )
}

export default Stacknavigation