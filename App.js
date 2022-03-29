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
import styling from './css/styling';
import Headcomponent from './src/components/Headcomponent'

import Component3 from './src/Screen/HomeScreen/HomeComponent';

import Stacknavigation from './src/navigation/Stacknavigation';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from './screens/menu/MenuScreen';
import Search from './screens/search/Search';



const App = () => {


  return (
    <>
      {/* this is use for status bar theming */}
      <View>
        <StatusBar barStyle='dark-content' backgroundColor={"white"} />
      </View>
      {/* -----------------------------------Navigation Container-------------------------------------------*/}
      <NavigationContainer >
        <Stacknavigation />
      </NavigationContainer>


    </>
  );
};


export default App;
