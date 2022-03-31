import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import MenuScreen from '../Screen/menu/MenuScreen';
import AuthStack from './AuthStack';

import MainStack from './HomeStack';

const Stack = createStackNavigator();

export default function Routes() {
    // const userData = useSelector(state => state?.auth?.userData);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {true ? MainStack(Stack) : AuthStack(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
