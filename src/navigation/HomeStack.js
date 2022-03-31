import React from 'react';
// import { useSelector } from 'react-redux';
import LogingPage from '../Screen/loginPage/LogingPage';
import Headcomponent from './TabNavigation'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../Screen/ProfileScreen/Profilemains'
import MenuScreen from '../Screen/menu/MenuScreen'
import Search from '../Screen/search/Search'


const Stack = createStackNavigator();
export default function () {
    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Headcomponent} />
                <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: true, headerTitle: "", headerTransparent: true, headerBackButtonMenuEnables: false, gestureEnabled: true, gestureDirection: 'horizontal' }} />
                <Stack.Screen name="Abhi Thakur" component={Profile} options={{ headerShown: true }} />
                <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>


        </>
    );
}
