import React from 'react'
import { SafeAreaView, Text, View, Image } from 'react-native'
import styles from '../../../css/styling'

function Profile() {
    return (
        <>
            <SafeAreaView>
                <View style={{ flexDirection: "row", paddingLeft: 20 }}>
                    <Image source={require('../profileimages/left-arrow.png')} style={{ height: 20, width: 20 }} />
                    <Text>Abhi Thakur</Text>
                </View>
            </SafeAreaView>
        </>
    )
}

export default Profile