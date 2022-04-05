import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Buttondemo from './Buttondemo'
import InputDemo from './InputDemo'
const Tab = createStackNavigator()

function Stackdemo() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Go' component={InputDemo} />
                <Tab.Screen name='Back' component={Buttondemo} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Stackdemo