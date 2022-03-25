import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import Headcomponent from './components/Headcomponent'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from './screens/profilescreen/profilecode/Profilemains'

const Stack = createStackNavigator();
function Stacknavigation() {
    return (


        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Headcomponent} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default Stacknavigation