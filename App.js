/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,

} from 'react-native';
import styling from './css/styling';
import Headcomponent from './components/Headcomponent'

import Component3 from './components/Component3';


const App = () => {


  return (
    <SafeAreaView style={styling.maincontainer}>
      {/* Status Bar */}
      <Headcomponent />


      {/* //Thirdcontainer */}
      <Component3 />


    </SafeAreaView>
  );
};


export default App;
