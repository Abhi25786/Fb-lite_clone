import React from 'react'
import { ScrollView, View, TouchableOpacity, Image, FlatList, TextInput, Text, Button } from 'react-native'
import styling from '../css/styling'
function Statussaction() {
    return (
        <>
            <View >
                <View style={styling.border}>
                    <TouchableOpacity><Image source={require('../Images/profile_user.jpg')} style={styling.profilepic} /></TouchableOpacity>
                    <View style={styling.writetext}>
                        <TextInput
                            placeholder="write something here.." />
                    </View>
                    <View style={styling.picuplode}>
                        <TouchableOpacity><Image source={require('../Images/uplode.png')} style={styling.home} /></TouchableOpacity>
                        <Text style={styling.phototext} >Photo</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Statussaction