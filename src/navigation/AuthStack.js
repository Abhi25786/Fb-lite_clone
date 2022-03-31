import React from 'react';
// import { useSelector } from 'react-redux';
import LogingPage from '../Screen/loginPage/LogingPage';
import Signuppage from '../Screen/signup/Signuppage';

// import navigationStrings from './navigationStrings';

export default function (Stack) {
    return (
        <>
            <Stack.Screen name='Login' component={LogingPage} />
            <Stack.Screen name="Signup" component={Signuppage} />
        </>
    );
}
