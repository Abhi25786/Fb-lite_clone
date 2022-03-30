import React from 'react'
import { ScrollView, View, TouchableOpacity, Image, FlatList, TextInput, Text, Button, VirtualizedList, D } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import { images } from '../assets/Pics'
import styling from '../styles/styling'
import DATA from './flatlist'

function Postlist() {
    return (
        <>
            {/* -------------------------------------------------Postlist main container------------------------------------- */}

            <View style={{ paddingBottom: 10 }}>


                <FlatList

                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={(element) => {
                        return (
                            <View>
                                <View style={{ backgroundColor: "white" }}>
                                    <Divider width={5} />
                                    {/* ---------------------------------Post Header part--------------------------------- */}
                                    <View style={styling.post}>
                                        <View >
                                            <TouchableOpacity><Image source={element.item.uri} style={styling.profilepic} /></TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 0.9 }}>
                                            <Text style={{ color: "black", fontWeight: 'bold' }}>{element.item.name}</Text>
                                        </View>
                                        <View style={{ alignItems: "flex-end" }}>
                                            <TouchableOpacity><Image source={images.dotmenubtn} style={styling.logo} /></TouchableOpacity>
                                        </View>
                                    </View>
                                    {/* ------------------------------------Post Images------------------------------------ */}
                                    <View style={{ alignItems: "center", resizeMode: 'contain', }}>
                                        <Image source={element.item.uri} style={styling.postimages} />
                                    </View>

                                    {/* -------------------------------Post buttons container------------------------------- */}
                                    <View style={styling.mainline} >
                                        <View style={styling.imagebtn} >
                                            <Image style={styling.imagelogo} source={images.Like} />
                                        </View>

                                        <View style={styling.imagebtn} >
                                            <Image style={styling.imagelogo} source={images.Comment} />
                                        </View>
                                        <View style={styling.imagebtn} >
                                            <Image style={styling.imagelogo} source={images.Forword} />
                                        </View>
                                    </View>
                                </View>
                            </View>

                        )
                    }}
                />


            </View>

        </>
    )
}

export default Postlist