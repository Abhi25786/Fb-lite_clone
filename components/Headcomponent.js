import React from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import styling from '../css/styling'


function Component1() {
    return (

        <>
            {/* this is our mian head view  */}
            <View >

                < View style={styling.mainline} >
                    {/* This is brand name */}
                    <View style={{ flex: 0.4, padding: 5 }}>
                        <Text style={styling.brandname}>facebook</Text>
                    </View>

                    <View style={[styling.logoflex, { flex: 0.6, padding: 5 }]}>
                        {/* this is search icon */}
                        <View style={styling.searchlogo}>
                            <TouchableOpacity><Image source={require('../Images/search.png')} style={styling.logo} /></TouchableOpacity>
                        </View>
                        {/* this is user profile */}
                        <View style={styling.searchlogo}>
                            <TouchableOpacity><Image source={require('../Images/profile.png')} style={styling.profile} /></TouchableOpacity>
                        </View>
                        {/* this is use profile menu */}
                        <View style={styling.searchlogo}>
                            <TouchableOpacity><Image source={require('../Images/menu.png')} style={styling.logo} /></TouchableOpacity>
                        </View>
                    </View>

                </View>
                <View style={styling.secondline}>
                    {/* This is home button*/}

                    <TouchableOpacity>
                        <View style={styling.homemain}>
                            <Image source={require('../Images/home.png')} style={styling.home} />
                            <View style={styling.hometextstyling}>
                                <Text style={styling.hometext}>
                                    10
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* This is fried request button*/}

                    <TouchableOpacity>
                        <View style={styling.homemain}>
                            <Image source={require('../Images/people.png')} style={styling.home} />
                            <View style={styling.hometextstyling}>
                                <Text style={styling.hometext}>
                                    90
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* This is message button*/}
                    <TouchableOpacity>
                        <View style={styling.homemain}>
                            <Image source={require('../Images/chat.png')} style={styling.home} />
                            <View style={styling.hometextstyling}>
                                <Text style={styling.hometext}>
                                    50
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* This is notification button*/}
                    <TouchableOpacity>
                        <View style={styling.homemain}>
                            <Image source={require('../Images/bell.png')} style={styling.home} />
                            <View style={styling.hometextstyling}>
                                <Text style={styling.hometext}>
                                    26
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* This is Videos  button*/}
                    <TouchableOpacity>
                        <View style={styling.homemain}>
                            <Image source={require('../Images/series.png')} style={styling.home} />

                        </View>
                    </TouchableOpacity>
                    {/* This is store button*/}
                    <TouchableOpacity>
                        <View style={styling.homemain}>
                            <Image source={require('../Images/shop.png')} style={styling.home} />
                            <View style={styling.hometextstyling}>
                                <Text style={styling.hometext}>
                                    10
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
            </View >
        </>
    )
}

export default Component1