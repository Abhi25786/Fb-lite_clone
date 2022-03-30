import React from 'react'
import { ScrollView, View, TouchableOpacity, Image, FlatList, TextInput, Text, Button } from 'react-native'
import { images } from '../assets/Pics'
import styling from '../styles/styling'

function Statussaction() {
    return (
        <>
            <View >
                <View style={styling.border}>
                    <View style={{ justifyContent: "center", alignItems: "center" }} >
                        <TouchableOpacity><Image source={images.Profile} style={styling.profilepic} /></TouchableOpacity>
                        <Text style={{ backgroundColor: "lightgreen", color: "lightgreen", height: 15, width: 15, position: "absolute", right: 5, bottom: 10, borderRadius: 10, borderColor: "white", borderWidth: 2, }}> </Text>

                    </View>

                    <View style={styling.writetext}>
                        <TextInput
                            placeholder="write something here.." />
                    </View>
                    <View style={styling.picuplode}>
                        <TouchableOpacity><Image source={images.Uplodeicon} style={styling.home} /></TouchableOpacity>
                        <Text style={styling.phototext} >Photo</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Statussaction