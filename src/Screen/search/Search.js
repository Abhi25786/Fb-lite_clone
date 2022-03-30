import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, FlatList, Button, TouchableOpacity, TextInput } from 'react-native'
import styling from '../search/searchcss'
import styles from '../../styles/styling'
function Search({ navigation }) {
    return (

        <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>

            <View style={{ flexDirection: "row", marginHorizontal: 10, marginVertical: 5 }}>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", flex: 0.1 }} onPress={() => navigation.navigate('Home')}>

                    <Image source={require('../../assets/Images/left-arrow.png')} style={styles.home} />

                </TouchableOpacity>

                <View style={{ flex: 0.8, borderColor: "gray", borderWidth: 0.5, borderRadius: 40 }} >
                    <TextInput placeholder="Search..." style={{ paddingHorizontal: 10, color: "black", }} />
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 0.1 }}>
                    <TouchableOpacity><Image source={require('../../assets/Images/search.png')} style={styles.home} /></TouchableOpacity>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default Search