import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import profile from '../profilecss/profilecss'

function Headpart() {
    return (
        <>
            <View style={profile.Headpart}>
                <TouchableOpacity><Image source={require('../profileimages/left-arrow.png')} style={profile.smaillicons} /></TouchableOpacity>
                <Text style={profile.smailliconstext}>Abhi Thakur</Text>
            </View>
        </>

    )
}

export default Headpart