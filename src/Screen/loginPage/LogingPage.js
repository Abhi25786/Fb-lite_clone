import React, { useState } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView, TextInput, Button, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import Divider2 from 'react-native-divider'

import logincss from './logincss'
import { useDispatch } from 'react-redux'
import { loginContinue } from '../../redux/actions'


function LogingPage({ navigation }) {
    const dispatch = useDispatch();

    const [text, setText] = useState('');
    const [name, lastName] = useState('');
    const [show, setshow] = useState(false)

    const Click = () => {
        if (text === '') {
            setshow(true)
        } else if (name === '') {
            setshow(true)
        } else {
            dispatch(loginContinue())
        }
    }
    return (

        // ----------- ---------------------------------------Login Container---------------------------------------//
        <SafeAreaView style={logincss.maincontainer}>
            <ScrollView>

                {/* ------------------------------------------Headpart------------------------------------------- */}
                <View style={{ alignItems: "center", marginBottom: 5 }}>
                    <Text>Facebook</Text>
                </View>
                <Divider />

                {/* -------------------------------------------Text Input Container-------------------------------*/}
                <View>

                    <Text style={logincss.text}>Mobile number or email</Text>
                    <View style={logincss.textinput}>
                        <TextInput placeholder='Enter email or number' onChangeText={setText} />
                    </View>
                    {
                        show ? <Text>Enter Valid email or Number</Text> : null
                    }

                    <Text style={logincss.text}>Password</Text>
                    <View style={logincss.textinput}>
                        <TextInput placeholder='Enter password' onChangeText={lastName} />
                    </View>
                    {
                        show ? <Text>Enter Password</Text> : null
                    }
                </View>
                {/* --------------------------------------------Buttons Container-------------------------------- */}
                <View>
                    <View style={{ marginVertical: 10 }}>
                        <Button title='Login' onPress={Click} ></Button>
                    </View>
                    <Text style={logincss.forgettext}>Forgot password?</Text>
                    <Divider2 orientation="center">
                        or
                    </Divider2>
                    <View style={{ alignItems: "center" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                            <View style={logincss.creataccountbtn}>
                                <Text style={logincss.textcolour}>Create new account</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* --------------------------------------------Choose Languages Container------------------------- */}
                <View>
                    <Text style={logincss.text}>English (US)</Text>
                    <Text style={logincss.forgettext}>हिन्दी</Text>
                    <Text style={logincss.forgettext}>ਪੰਜਾਬੀ</Text>
                    <Text style={logincss.forgettext}>বাংলা</Text>
                    <Text style={logincss.forgettext}>ଓଡ଼ିଶା</Text>
                    <Text style={logincss.forgettext}>मराठी</Text>
                    <Text style={logincss.forgettext}>More languages...</Text>
                </View>



            </ScrollView>
        </SafeAreaView>
    )

}
export default LogingPage