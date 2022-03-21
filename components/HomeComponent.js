import React from 'react'
import { ScrollView, View, TouchableOpacity, Image, FlatList, TextInput, Text, Button } from 'react-native'
import DATA from './flatlist'
import styling from '../css/styling'
import Suggestlist from './Addfriend'
import Statussaction from './Statussaction'
import Postlist from './Postlist'

function Component3() {
    return (
        <ScrollView style={styling.ScrollViewborder} scrollIndicatorInsets={false} >

            <Statussaction />
            <View style={styling.border} >

                {/* Show your feeling Button */}
                <View style={styling.emojis}>
                    <Image source={require('../Images/feeling.png')} style={styling.emojiimage} />
                    <Text style={styling.emoji}>Feeling</Text>
                </View>
                {/* Live Video button */}
                <View style={styling.emojis}>
                    <Image source={require('../Images/live.png')} style={styling.emojiimage} />
                    <Text style={styling.emoji}>Live Video</Text>
                </View>
                {/* show your location Button */}
                <View style={styling.emojis}>
                    <Image source={require('../Images/location.png')} style={styling.emojiimage} />
                    <Text style={styling.emoji}>Location</Text>
                </View>

            </View>
            {/* This is the stories view section */}
            <View style={styling.flat}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={(element) => {
                        return (
                            <TouchableOpacity><View >
                                <Image source={element.item.uri} style={styling.story} />
                                <Text style={styling.imagetext}> {element.item.name}</Text>
                            </View></TouchableOpacity>
                        )
                    }}
                />
                <Button title='View all stories' color={"#87cefa"} accessibilityLabel={"Abhi"} />


            </View>
            {/* //post component */}


            {/* <Postlist /> */}
            <Suggestlist />
            <Postlist />


        </ScrollView>
    )
}

export default Component3