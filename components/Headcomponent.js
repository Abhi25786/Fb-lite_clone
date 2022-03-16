import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native'
import styling from '../css/styling'

function Component1() {
    return (

        <>
            < View style={styling.mainline} >

                <View style={{ flex: 0.4, padding: 5 }}>
                    <Text style={styling.brandname}>facebook</Text>
                </View>

                <View style={[styling.logoflex, { flex: 0.6, padding: 5 }]}>
                    <View style={styling.searchlogo}>
                        <TouchableOpacity><Image source={require('../Images/search.png')} style={styling.logo} /></TouchableOpacity>
                    </View>

                    <View style={styling.searchlogo}>
                        <TouchableOpacity><Image source={require('../Images/profile.png')} style={styling.profile} /></TouchableOpacity>
                    </View>
                    <View style={styling.searchlogo}>
                        <TouchableOpacity><Image source={require('../Images/menu.png')} style={styling.logo} /></TouchableOpacity>
                    </View>
                </View>

            </View>
            <View style={styling.secondline}>
                {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> */}
                <TouchableOpacity><Image source={require('../Images/home.png')} style={styling.home} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('../Images/people.png')} style={styling.home} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('../Images/chat.png')} style={styling.home} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('../Images/bell.png')} style={styling.home} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('../Images/series.png')} style={styling.home} /></TouchableOpacity>
                <TouchableOpacity><Image source={require('../Images/shop.png')} style={styling.home} /></TouchableOpacity>
                {/* </ScrollView> */}
            </View>
        </>
    )
}

export default Component1