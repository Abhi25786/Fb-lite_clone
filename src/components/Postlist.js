import React from 'react'
import { ScrollView, View, TouchableOpacity, Image, FlatList, TextInput, Text, Button, VirtualizedList, D } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import styling from '../../css/styling'
import DATA from './flatlist'
function Postlist() {
    return (
        <>

            <View style={{ paddingBottom: 10 }}>


                <FlatList

                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={(element) => {
                        return (
                            <View>
                                <View style={{ backgroundColor: "white" }}>
                                    <Divider width={5} />
                                    <View style={styling.post}>
                                        <View >
                                            <TouchableOpacity><Image source={element.item.uri} style={styling.profilepic} /></TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 0.9 }}>
                                            <Text style={{ color: "black", fontWeight: 'bold' }}>{element.item.name}</Text>
                                        </View>
                                        <View style={{ alignItems: "flex-end" }}>
                                            <TouchableOpacity><Image source={require('../assets/Images/menuarrow.png')} style={styling.logo} /></TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ alignItems: "center", resizeMode: 'contain', }}>
                                        <Image source={element.item.uri} style={styling.postimages} />
                                    </View>
                                    <View style={styling.mainline} >
                                        <View style={styling.imagebtn} >
                                            <Image style={styling.imagelogo} source={require('../assets/Images/like.png')} />
                                        </View>

                                        <View style={styling.imagebtn} >
                                            <Image style={styling.imagelogo} source={require('../assets/Images/comment.png')} />
                                        </View>
                                        <View style={styling.imagebtn} >
                                            <Image style={styling.imagelogo} source={require('../assets/Images/turn-right-arrow.png')} />
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