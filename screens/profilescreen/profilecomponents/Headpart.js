import React from 'react'
import { View, Image, Text } from 'react-native'
import profile from '../profilecss/profilecss'

function Headpart() {
    return (
        <>
            <View style={profile.Headpart}>
                <Image source={require('../profileimages/left-arrow.png')} style={profile.smaillicons} />
                <Text style={profile.smailliconstext}>Abhi Thakur</Text>
            </View>
        </>

    )
}

export default Headpart