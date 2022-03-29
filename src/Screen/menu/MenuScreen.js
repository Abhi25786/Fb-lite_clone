import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, FlatList, Button, TouchableOpacity, TextInput } from 'react-native'

import DATA from '../../components/menuflatlisht'
import styling from '../../../css/styling'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import menustyle from './menucss'

function MenuScreen({ navigation }) {
    return (
        <SafeAreaView style={menustyle.maincontainer}>
            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity>
                    <View style={{ flex: 0.7, position: "absolute", left: 60, top: 15 }}>
                        <Text style={{ fontSize: 20, color: "black" }}>Menu</Text>
                    </View>

                </TouchableOpacity>
                <View style={{ position: "absolute", top: 10, end: 10 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <View style={styling.searchlogo}>
                            <Image source={require('../../assets/Images/search.png')} style={styling.logo} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>


            <Divider style={{ marginTop: 50 }} />

            <TouchableOpacity onPress={() => navigation.navigate('Abhi Thakur')} accessibilityIgnoresInvertColors={"black"}><View style={{ flexDirection: "row" }}>
                <View >
                    <View style={{ justifyContent: "flex-end" }} >
                        <Image source={require('../../assets/Images/profile_user.jpg')} style={styling.profilepic} />
                    </View>
                </View>
                <View >
                    <Text style={menustyle.headtextcss}>Abhi Thakur</Text>
                    <Text>View your profile</Text>
                </View>
            </View>
            </TouchableOpacity>


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
