import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView, TextInput, Button, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import Divider2 from 'react-native-divider'

import logincss from './logincss'

function LogingPage() {
    return (
        <SafeAreaView style={logincss.maincontainer}>
            <ScrollView>


                <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Text>Facebook</Text>
                </View>
                <Divider />
                <Text style={logincss.text}>Mobile number or email</Text>
                <View style={logincss.textinput}>
                    <TextInput style={{ borderColor: "blue", }}></TextInput>
                </View>
                <Text style={logincss.text}>Password</Text>
                <View style={logincss.textinput}>
                    <TextInput style={{ borderColor: "blue", }}></TextInput>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Button title='Login' ></Button>
                </View>
                <Text style={logincss.forgettext}>Forgot password?</Text>
                <Divider2 orientation="center">
                    or
                </Divider2>
                <View style={{ alignItems: "center" }}>
                    <View style={{ alignItems: "center", backgroundColor: "#228b22", justifyContent: "center", width: 150 }}>
                        <Text style={{ color: "white", paddingVertical: 8 }}>Create new account</Text>
                    </View>
                </View>
                <Text style={logincss.text}>English (US)</Text>
                <Text style={logincss.forgettext}>हिन्दी</Text>
                <Text style={logincss.forgettext}>ਪੰਜਾਬੀ</Text>
                <Text style={logincss.forgettext}>বাংলা</Text>
                <Text style={logincss.forgettext}>ଓଡ଼ିଶା</Text>
                <Text style={logincss.forgettext}>मराठी</Text>
                <Text style={logincss.forgettext}>More languages...</Text>


            </ScrollView>
        </SafeAreaView>
    )
}

export default LogingPage