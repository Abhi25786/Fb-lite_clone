import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, FlatList, Button, TouchableOpacity, TextInput } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import styles from '../../../css/styling'
import profile from '../profilecss/profilecss'
import Profileflatlist from './Profileflatlist'
import Postlist from '../../../components/Postlist'
import Statussaction from '../../../components/Statussaction'

import Profilestatus from '../profilecomponents/Profilestatus'
import { NavigationContainer } from '@react-navigation/native'


function Profile({ navigation }) {
    return (
        <>
            <SafeAreaView style={profile.maincontainer}>

                <View style={{ borderTopColor: "lightgray", borderTopWidth: 1 }}>
                    <ScrollView styles={{ marginBottom: 100 }}>
                        <View style={{ margin: 10 }}>
                            <View style={{ marginBottom: 10, justifyContent: "center" }}>

                                <View style={profile.container}>
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Image source={require('../profileimages/profile_user.jpg')} style={profile.profilebackimg} />
                                        <Image source={require('../profileimages/photo-camera1.png')} style={{ position: "absolute", height: 35, width: 35, alignItems: "flex-end", right: 50, bottom: 50 }} />
                                    </View>

                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Image source={require('../profileimages/profile_user.jpg')} style={profile.profileimg} />
                                        <Image source={require('../profileimages/photo-camera1.png')} style={{ position: "absolute", height: 35, width: 35, borderColor: "white", borderWidth: 3, borderRadius: 20, left: 50, top: 10 }} />
                                    </View>



                                </View>



                                <View style={{ alignItems: 'center' }}><Text style={profile.smailliconstext}>
                                    Abhi Thakur (Abhi)
                                </Text></View>
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <TouchableOpacity >
                                    <View style={profile.adddbtn}>
                                        <Image source={require('../profileimages/add.png')} style={profile.iconscss} />
                                        <Text style={{ color: "black" }}>Add to story</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={profile.editbtn}>
                                    <Image source={require('../profileimages/pen.png')} style={profile.iconscss} />
                                    <Text style={{ color: "black" }}>Edit profile</Text>
                                </View>
                                <View style={{ justifyContent: "center", backgroundColor: "lightgray", alignItems: "center", borderRadius: 10, paddingLeft: 10 }}>
                                    <Image source={require('../profileimages/menu.png')} style={profile.iconscss} />
                                </View>
                            </View>
                            <View style={profile.Headpart}>
                                <Image source={require('../profileimages/heart.png')} style={profile.smaillicons} />
                                <Text style={profile.smailliconstext}>Single</Text>
                            </View>
                            <View style={profile.Headpart}>
                                <Image source={require('../profileimages/wifi.png')} style={profile.smaillicons} />
                                <Text style={profile.smailliconstext}>Followed by 100 person</Text>
                            </View>
                            <View style={profile.Headpart}>
                                <Image source={require('../profileimages/heart.png')} style={profile.smaillicons} />
                                <Text style={profile.smailliconstext}>See more about yourself</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                <View style={{ flex: 0.9, flexDirection: "column" }}>
                                    <Text style={{ fontWeight: "bold", color: "black" }}>Friends</Text>
                                    <Text>985 friends</Text>
                                </View>
                                <View style={{ flex: 1, alignItems: "flex-end", }}>
                                    <Text style={{ color: "blue" }}>See All</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    data={Profileflatlist}
                                    renderItem={(element) => {
                                        return (
                                            <TouchableOpacity><View style={{ alignItems: "center", }} >
                                                <Image source={element.item.uri} style={profile.imagecard} />
                                                <Text style={{ fontWeight: "bold", color: "black" }}> {element.item.name}</Text>
                                            </View></TouchableOpacity>
                                        )
                                    }}
                                    numColumns={3}
                                />

                            </View>

                        </View>
                        <Divider width={4} />
                        <View style={profile.Headpart}>
                            <View style={{ flexDirection: "row", backgroundColor: "lightgray", borderRadius: 20, marginTop: 10, padding: 5, alignItems: "center" }}>
                                <Image source={require('../profileimages/uplode.png')} style={profile.smaillicons} />
                                <Text style={profile.smailliconstext}>Photos</Text>
                            </View>
                        </View>
                        <Divider width={4} />

                        <Profilestatus />

                        {/* this is post list */}
                        <Postlist />
                    </ScrollView>

                </View>
            </SafeAreaView >
        </>
    )
}
export default Profile