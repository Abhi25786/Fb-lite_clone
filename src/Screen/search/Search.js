import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, FlatList, Button, TouchableOpacity, TextInput } from 'react-native'
import { searchcss } from '../search/searchcss'
import styles from '../../styles/styling'
import { images } from '../../assets/Pics'


function Search({ navigation }) {
    return (

        <SafeAreaView style={searchcss.maincontainer}>

            <View style={searchcss.searchview}>
                <TouchableOpacity style={searchcss.imagestyle} onPress={() => navigation.navigate('Home')}>

                    <Image source={images.leftarrow} style={styles.home} />

                </TouchableOpacity>

                <View style={searchcss.inputview}>
                    <TextInput placeholder="Search..." style={searchcss.inputcss} />
                </View>
                <View style={searchcss.imagestyle}>
                    <TouchableOpacity><Image source={images.search} style={styles.home} /></TouchableOpacity>

                </View>
            </View>

        </SafeAreaView>
    )
}

export default Search