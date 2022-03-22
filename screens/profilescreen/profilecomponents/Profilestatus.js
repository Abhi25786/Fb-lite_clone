import React from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import styles from '../../../css/styling'
import profile from '../profilecss/profilecss'

function Profilestatus() {
    return (

        <>
            <View >
                <View>
                    <Text style={profile.smailliconstext}>Posts</Text>
                </View>
                <View style={styles.border}>
                    <TouchableOpacity><Image source={require('../profileimages/profile_user.jpg')} style={styles.profilepic} /></TouchableOpacity>
                    <View style={styles.writetext}>
                        <TextInput
                            placeholder="Post a status update" />
                    </View>
                    <View style={styles.picuplode}>
                        <TouchableOpacity><Image source={require('../profileimages/uplode.png')} style={styles.home} /></TouchableOpacity>
                        <Text style={styles.phototext} >Photo</Text>
                    </View>
                </View>
                <View style={profile.border} >

                    {/* Show your feeling Button */}
                    <View style={styles.emojis}>
                        <Image source={require('../../../Images/greenphoto.png')} style={styles.emojiimage} />
                        <Text style={styles.emoji}>Feeling</Text>
                    </View>
                    <Divider orientation="vertical" width={1} />
                    {/* Live Video button */}
                    <View style={styles.emojis}>
                        <Image source={require('../../../Images/location.png')} style={styles.emojiimage} />
                        <Text style={styles.emoji}>Location</Text>
                    </View>
                    <Divider orientation="vertical" width={1} />
                    {/* show your location Button */}
                    <View style={styles.emojis}>

                        <Image source={require('../../../Images/live.png')} style={styles.emojiimage} />
                        <Text style={styles.emoji}>Live Video</Text>
                    </View>

                </View>

            </View>
        </>
    )
}

export default Profilestatus