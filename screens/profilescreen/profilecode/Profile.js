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


                                {/* <View style={{ height: 400, width: 400 }}>
                                    <Image source={require('../profileimages/profile_user.jpg')} style={{ width: 400, height: 200, position: "absolute" }} />
                                    <View style={profile.cameralogo}>
                                        <Image source={require('../profileimages/photo-camera.png')} style={styles.home} />

                                    </View>

                                </View> */}
                                <View style={profile.container}>
                                    <Image source={require('../profileimages/profile_user.jpg')} style={profile.profilebackimg} />

                                    <Image source={require('../profileimages/profile_user.jpg')} style={profile.profileimg} />
                                </View>



                                <View style={{ alignItems: 'center' }}><Text style={profile.smailliconstext}>
                                    Abhi Thakur (Abhi)
                                </Text></View>

                            </View>


                            <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                                <View style={profile.adddbtn}>
                                    <Image source={require('../profileimages/add.png')} style={profile.iconscss} />
                                    <Text>Add to story</Text>
                                </View>
                                <View style={profile.editbtn}>
                                    <Image source={require('../profileimages/pen.png')} style={profile.iconscss} />
                                    <Text>Edit profile</Text>
                                </View>
                                <View style={{ justifyContent: "center", backgroundColor: "lightgray", alignItems: "center", borderRadius: 10, paddingLeft: 10 }}>
                                    <Image source={require('../profileimages/menu.png')} style={profile.iconscss} />

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