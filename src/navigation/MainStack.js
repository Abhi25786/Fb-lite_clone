import React from 'react';
// import { useSelector } from 'react-redux';

import MenuScreen from '../Screen/menu/MenuScreen';
import Profile from '../Screen/ProfileScreen/Profilemains';
import HomeStack from './HomeStack';

// import navigationStrings from './navigationStrings';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name='home'
                component={HomeStack}
                options={{ headerShown: false }}
            />
        </>
    );
}