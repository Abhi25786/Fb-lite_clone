import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import Headcomponent from '../components/Headcomponent'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../Screen/ProfileScreen/Profilemains'
import MenuScreen from '../Screen/menu/MenuScreen'
import Search from '../Screen/search/Search'
import LoginPage from '../Screen/loginPage/LogingPage'
import { NavigationContainer } from '@react-navigation/native'




const Stack = createStackNavigator();
function Stacknavigation() {
    return (
        //---------------------------Routes Screens-------------------------------// 
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Headcomponent} />
                <Stack.Screen name="Abhi Thakur" component={Profile} options={{ headerShown: true }} />
                <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: true, headerTitle: "", headerTransparent: true, headerBackButtonMenuEnables: false }} />
                <Stack.Screen name="Search" component={Search} />
                <Stack.Screen name='Login' component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Stacknavigation