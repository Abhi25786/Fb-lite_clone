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
import styling from './src/css/styling';
import Headcomponent from './src/components/Headcomponent'

import Component3 from './src/Screen/homeScreen/Homescreen';

import Stacknavigation from './src/navigation/Stacknavigation';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from './src/Screen/menu/MenuScreen';
import LogingPage from './src/Screen/loginPage/LogingPage';
import Signuppage from './src/Screen/signup/Signuppage';




const App = () => {


  return (
    <>
      {/* this is use for status bar theming */}
      <View>
        <StatusBar barStyle='dark-content' backgroundColor={"white"} />
      </View>
      {/* -----------------------------------Navigation Container-------------------------------------------*/}
      {/* <NavigationContainer >
        <Stacknavigation />
      </NavigationContainer> */}
      <LogingPage />
      {/* <Signuppage /> */}
    </>
  );
};


export default App;
