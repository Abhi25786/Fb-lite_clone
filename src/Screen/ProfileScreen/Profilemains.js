import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, FlatList, Button, TouchableOpacity, TextInput } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import styles from '../../styles/styling'
import profile from './profilecss'
import Profileflatlist from '../../components/Profileflatlist'
import Postlist from '../../components/Postlist'
import Statussaction from '../../components/Statussaction'

import Profilestatus from '../../components/Profilestatus'
import { NavigationContainer } from '@react-navigation/native'


function Profile({ navigation }) {
    return (
        <>
            {/* -------------------------------------------Main Container------------------------------------------ */}
            <SafeAreaView style={profile.maincontainer}>

                <View style={profile.mainview}>
                    <ScrollView>
                        <View style={profile.viewcontainer}>
                            {/*--------------------------------------------Profile Container--------------------------------------- */}
                            <View style={profile.viewcontainer}>

                                <View style={profile.container}>
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Image source={require('../../assets/Images/profile_user.jpg')} style={profile.profilebackimg} />
                                        <Image source={require('../../assets/Images/photo-camera1.png')} style={profile.imgicon} />
                                    </View>

                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <Image source={require('../../assets/Images/profile_user.jpg')} style={profile.profileimg} />
                                        <Image source={require('../../assets/Images/photo-camera1.png')} style={profile.img} />
                                    </View>



                                </View>


                                {/*-----------------------------------------------User Name --------------------------------------------- */}
                                <View style={{ alignItems: 'center' }}><Text style={profile.smailliconstext}>
                                    Abhi Thakur (Abhi)
                                </Text>
                                </View>
                            </View>
                            {/*--------------------------------------------Buttons Container--------------------------------------- */}
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <TouchableOpacity >
                                    <View style={profile.adddbtn}>
                                        <Image source={require('../../assets/Images/add.png')} style={profile.iconscss} />
                                        <Text style={profile.addtext}>Add to story</Text>
                                    </View>
                                </TouchableOpacity>
                                <View style={profile.editbtn}>
                                    <Image source={require('../../assets/Images/pen.png')} style={profile.iconscss} />
                                    <Text style={profile.addtext}>Edit profile</Text>
                                </View>
                                <View style={profile.menubtn}>
                                    <Image source={require('../../assets/Images/menublack.png')} style={profile.iconscss} />
                                </View>
                            </View>
                            {/*--------------------------------------------About Profile Container--------------------------------------- */}
                            <View>
                                <View style={profile.Headpart}>
                                    <Image source={require('../../assets/Images/heart.png')} style={profile.smaillicons} />
                                    <Text style={profile.smailliconstext}>Single</Text>
                                </View>
                                <View style={profile.Headpart}>
                                    <Image source={require('../../assets/Images/wifi.png')} style={profile.smaillicons} />
                                    <Text style={profile.smailliconstext}>Followed by 100 person</Text>
                                </View>
                                <View style={profile.Headpart}>
                                    <Image source={require('../../assets/Images/heart.png')} style={profile.smaillicons} />
                                    <Text style={profile.smailliconstext}>See more about yourself</Text>
                                </View>
                            </View>
                            {/*--------------------------------------------About Friend Container--------------------------------------- */}
                            <View>


                                <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={{ flex: 0.9, flexDirection: "column" }}>
                                        <Text style={{ fontWeight: "bold", color: "black" }}>Friends</Text>
                                        <Text>985 friends</Text>
                                    </View>
                                    <View style={{ flex: 1, alignItems: "flex-end", }}>
                                        <Text style={{ color: "blue" }}>See All</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: "center", justifyContent: "space-between" }}>
                                    <FlatList
                                        showsHorizontalScrollIndicator={false}
                                        data={Profileflatlist}
                                        renderItem={(element) => {
                                            return (
                                                <TouchableOpacity><View style={{ alignItems: "center", }} >
                                                    <Image source={element.item.uri} style={profile.imagecard} />
                                                    <Text style={profile.smailliconstext}> {element.item.name}</Text>
                                                </View></TouchableOpacity>
                                            )
                                        }}
                                        numColumns={3}
                                    />
                                </View>
                            </View>

                        </View>
                        {/*--------------------------------------------See Photos Container--------------------------------------- */}
                        <Divider width={4} />
                        <View style={profile.Headpart}>
                            <View style={profile.photoicon}>
                                <Image source={require('../../assets/Images/uplode.png')} style={profile.smaillicons} />
                                <Text style={profile.smailliconstext}>Photos</Text>
                            </View>
                        </View>
                        {/*-------------------------------------------- Uplode Post Container--------------------------------------- */}
                        <Divider width={4} />

                        <Profilestatus />

                        {/*--------------------------------------------Post list  Container--------------------------------------- */}
                        <Postlist />
                    </ScrollView>

                </View>
            </SafeAreaView >
        </>
    )
}
export default Profile