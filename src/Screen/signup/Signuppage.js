import React from 'react'
import { SafeAreaView, StatusBar, View, Text, Button, TextInput, ScrollView, } from 'react-native';
import DatePicker from 'react-native-datepicker';



import signup from './signupcss';

function Signuppage() {
    return (
        <SafeAreaView style={signup.mainContainer}>
            <ScrollView>


                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flex: 0.5, }}>
                        <Text style={signup.textstyle}>First name</Text>
                        <View style={signup.textinput}>
                            <TextInput style={{ borderColor: "blue", }}></TextInput>
                        </View>


                    </View>
                    <View style={{ flex: 0.5, }}>
                        <Text style={signup.textstyle}>Last name</Text>
                        <View style={signup.textinput}>
                            <TextInput style={{ borderColor: "blue", }}></TextInput>
                        </View>
                    </View>

                </View>
                <View >
                    <Text style={signup.textstyle}>Mobile number</Text>
                    <View style={signup.textinput}>
                        <TextInput style={{ borderColor: "blue", }} keyboardType={'numeric'} />
                    </View>


                </View>
                <View >
                    <Text style={signup.textstyle}>Email</Text>
                    <View style={signup.textinput}>
                        <TextInput style={{ borderColor: "blue", }}></TextInput>
                    </View>


                </View>
                <View >
                    <Text style={signup.textstyle}>Birth-date</Text>
                    <View style={{ flex: 1, flexDirection: "row", }}>
                        <DatePicker style={{ flex: 1, }} />
                    </View>
                </View>
                <View >
                    <Text style={signup.textstyle}>Email</Text>
                    <View style={signup.textinput}>
                        <TextInput style={{ borderColor: "blue", }}></TextInput>
                    </View>


                </View>




            </ScrollView>
        </SafeAreaView >
    )
}

export default Signuppage