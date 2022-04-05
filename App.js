/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, StatusBar, View

} from 'react-native';




import Routes from './src/navigation/Routes';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from './src/Screen/menu/MenuScreen';
import LogingPage from './src/Screen/loginPage/LogingPage';
import Signuppage from './src/Screen/signup/Signuppage';
import Stackdemo from './Stackdemo';




const App = () => {


  return (
    <>
      {/* ----------------------this is use for status bar theming-------------------------------*/}
      <View>
        <StatusBar barStyle='dark-content' backgroundColor={"white"} />
      </View>
      {/* -----------------------------------Main Routes-------------------------------------------*/}
      <Stackdemo />
      {/* <Routes /> */}

      {/* <LogingPage /> */}
      {/* <Signuppage /> */}
    </>
  );
};


export default App;
