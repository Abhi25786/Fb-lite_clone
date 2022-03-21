import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView } from 'react-native'
import styles from '../../../css/styling'
import profile from '../profilecss/profilecss'

function Profile() {
    return (
        <>
            <SafeAreaView style={profile.maincontainer}>
                <View style={profile.Headpart}>
                    <Image source={require('../profileimages/left-arrow.png')} style={profile.smaillicons} />
                    <Text style={profile.smailliconstext}>Abhi Thakur</Text>
                </View>
                <View style={{ borderTopColor: "lightgray", borderTopWidth: 1 }}>
                    <ScrollView>
                        <View style={{ margin: 10 }}>
                            <View style={{ marginBottom: 10, justifyContent: "center" }}>


                                <View style={profile.container}>
                                    <Image source={require('../profileimages/profile_user.jpg')} style={profile.profilebackimg} />

                                    <Image source={require('../profileimages/profile_user.jpg')} style={profile.profileimg} />
                                    <Image source={require('../profileimages/photo-camera1.png')} style={{ position: "absolute", height: 35, width: 35, alignItems: "flex-end", right: 0, bottom: 120 }} />
                                    <Image source={require('../profileimages/photo-camera1.png')} style={{ position: "absolute", height: 35, width: 35, alignItems: "flex-end", bottom: 50, right: 100, borderColor: "white", borderWidth: 3, borderRadius: 20 }} />
                                </View>



                                <View style={{ alignItems: 'center' }}><Text style={profile.smailliconstext}>
                                    Abhi Thakur (Abhi)
                                </Text></View>

                            </View>


                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <View style={profile.adddbtn}>
                                    <Image source={require('../profileimages/add.png')} style={profile.iconscss} />
                                    <Text style={{ color: "black" }}>Add to story</Text>
                                </View>
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
                                <Text style={profile.smailliconstext}>Followed by 100 persion</Text>
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
                                    <Text style={{ color: "blue" }}>Abhi</Text>
                                </View>
                            </View>


                        </View>
                    </ScrollView>

                </View>





            </SafeAreaView >
        </>
    )
}

export default Profile