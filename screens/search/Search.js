import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, FlatList, Button, TouchableOpacity, TextInput } from 'react-native'
import styling from '../../css/styling'
function Search({ navigation }) {
    return (

        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>

            <View style={{ flexDirection: "row", marginHorizontal: 10, marginVertical: 5 }}>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", flex: 0.1 }} onPress={() => navigation.navigate('Home')}>
                    <View >
                        <Image source={require('../../Images/left-arrow.png')} style={styling.home} />
                    </View>
                </TouchableOpacity>

                <View style={{ flex: 0.8, borderColor: "gray", borderWidth: 0.5, borderRadius: 40 }} >
                    <TextInput placeholder="Search..." style={{ paddingHorizontal: 10, color: "black", }} />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 0.1 }}>
                    <TouchableOpacity><Image source={require('../../Images/search.png')} style={styling.home} /></TouchableOpacity>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default Search