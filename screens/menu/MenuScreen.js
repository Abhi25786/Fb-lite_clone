import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, FlatList, Button, TouchableOpacity, TextInput } from 'react-native'

import DATA from '../menu/menuflatlisht'
import styling from '../../css/styling'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import menustyle from './menucss'

function MenuScreen() {
    return (
        <SafeAreaView style={menustyle.maincontainer}>


            <View style={{ flexDirection: "row" }}>
                <View >
                    <View style={{ justifyContent: "flex-end" }} >
                        <TouchableOpacity><Image source={require('../../Images/profile_user.jpg')} style={styling.profilepic} /></TouchableOpacity>
                    </View>
                </View>
                <View >
                    <Text style={menustyle.headtextcss}>Abhi Thakur</Text>
                    <Text>View your profile</Text>
                </View>
            </View>
            <Divider />
            <FlatList

                showsHorizontalScrollIndicator={false}
                data={DATA}
                renderItem={(element) => {
                    return (
                        <>


                            <TouchableOpacity><View style={{ margin: 10, flexDirection: "row" }}>
                                <View style={{ justifyContent: "center", alignItems: "center" }}>
                                    <Image source={element.item.uri} style={{ height: 35, width: 35, justifyContent: "center" }} />
                                </View>

                                <Text style={{ margin: 8, paddingHorizontal: 10, color: "black" }}>{element.item.name}</Text>

                            </View></TouchableOpacity>
                        </>

                    )
                }}
            />




        </SafeAreaView >
    )
}

export default MenuScreen
