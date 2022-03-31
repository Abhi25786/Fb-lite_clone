import React from 'react';
// import { useSelector } from 'react-redux';

import MenuScreen from '../Screen/menu/MenuScreen';
import Profile from '../Screen/ProfileScreen/Profilemains';
import HomeStack from './HomeStack';

// import navigationStrings from './navigationStrings';

export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={"Home"}
                component={HomeStack}
                options={{ headerShown: false }}
            />
        </>
    );
}