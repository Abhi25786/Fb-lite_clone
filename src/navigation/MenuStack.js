import React from 'react';
// import { useSelector } from 'react-redux';

import MenuScreen from '../Screen/menu/MenuScreen';

// import navigationStrings from './navigationStrings';

export default function (Stack) {
    return (
        <>
            <Stack.Screen name="Menu" component={MenuScreen} options={{ headerShown: true, headerTitle: "", headerTransparent: true, headerBackButtonMenuEnables: false, gestureEnabled: true, gestureDirection: 'horizontal' }} />

        </>
    );
}
