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

import Component3 from './components/Component3';
import Profile from './screens/profilescreen/profilecode/Profile';


const App = () => {


  return (
    <>
      <View>
        <StatusBar barStyle='dark-content' backgroundColor={"transparent"} />
      </View>
      <SafeAreaView style={styling.maincontainer}>
        {/* Status Bar */}
        <Headcomponent />
        {/* <Profile /> */}

        {/* //Thirdcontainer */}
        <Component3 />


      </SafeAreaView>
    </>
  );
};


export default App;
