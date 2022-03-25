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
import Headcomponent from './components/Headcomponent'

import Component3 from './components/HomeComponent';
import Profile from './screens/profilescreen/profilecode/Profilemains';
import Stacknavigation from './Stacknavigation';
import { NavigationContainer } from '@react-navigation/native';
import MenuScreen from './screens/menu/MenuScreen';


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
