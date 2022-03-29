import React from 'react'
import { SafeAreaView, Text, View, Image, ScrollView, FlatList, Button, TouchableOpacity, TextInput } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import styles from '../friendriquest/friendcss'
import styling from '../../css/styling'
import DATA from '../../components/flatlist'
function Friendrequest() {
    return (
        <>
            <View style={styles.Maincontainer}>
                <Divider width={1} />

                <ScrollView>
                    <Text style={{ fontWeight: 'bold', marginHorizontal: 10, fontSize: 20, color: "black" }}>Friends</Text>
                    <View style={styling.mainline}>
                        <View style={styling.imagebtn} >
                            <Text style={styles.btntext}>Suggestions</Text>
                        </View>
                        <View style={styling.imagebtn} >
                            <Text style={styles.btntext}>Your Friend</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>

                        <Text style={styles.btntext}>Suggestions</Text>


                        <Text style={{ color: "#1e90ff", marginTop: 5 }}>See all</Text>

                    </View>
                    <Divider width={1} style={{ marginTop: 5 }} />
                    <View style={styling.flat}>
                        <FlatList

                            showsHorizontalScrollIndicator={false}
                            data={DATA}
                            renderItem={(element) => {
                                return (

                                    <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 10 }}>
                                        <View style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}>
                                            <Image source={element.item.uri} style={{ height: 70, width: 70, borderRadius: 50 }} />
                                        </View>
                                        <View style={{ flex: 0.8 }}>
                                            <Text style={{ color: "black", fontWeight: "bold" }}>{element.item.name}</Text>
                                            <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 25 }}>
                                                <View style={{ justifyContent: "center", paddingTop: 5, paddingBottom: 5, flexDirection: "row", borderRadius: 5, backgroundColor: "#1e90ff", flex: 0.5, marginRight: 10 }}>
                                                    <TouchableOpacity><Text style={{ color: "white" }}>Confirm</Text></TouchableOpacity>
                                                </View>
                                                <View style={{ justifyContent: "center", paddingTop: 5, paddingBottom: 5, flexDirection: "row", borderRadius: 5, backgroundColor: "lightgray", flex: 0.5, marginLeft: 10 }}>
                                                    <TouchableOpacity><Text style={{ color: "black" }}>Delete</Text></TouchableOpacity>
                                                </View>
                                            </View>

                                        </View>


                                    </View>
                                    // <Image source={element.item.uri} />

                                )
                            }}
                        />
                        <TouchableOpacity><View style={{ justifyContent: "center", paddingTop: 5, paddingBottom: 5, flexDirection: "row", borderRadius: 5, backgroundColor: "lightgray", marginHorizontal: 10 }}>
                            <Text style={{ color: "black" }}>See All</Text>
                        </View></TouchableOpacity>
                    </View>
                    <Divider />
                    <FlatList

                        showsHorizontalScrollIndicator={false}
                        data={DATA}
                        renderItem={(element) => {
                            return (

                                <View style={{ flexDirection: 'row', marginHorizontal: 10, marginVertical: 10 }}>
                                    <View style={{ flex: 0.2, justifyContent: "center", alignItems: "center" }}>
                                        <Image source={element.item.uri} style={{ height: 70, width: 70, borderRadius: 50 }} />
                                    </View>
                                    <View style={{ flex: 0.8 }}>
                                        <Text style={{ color: "black", fontWeight: "bold" }}>{element.item.name}</Text>
                                        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 25 }}>
                                            <View style={{ justifyContent: "center", paddingTop: 5, paddingBottom: 5, flexDirection: "row", borderRadius: 5, backgroundColor: "#1e90ff", flex: 0.5, marginRight: 10 }}>
                                                <Text style={{ color: "white" }}>Add Friend</Text>
                                            </View>
                                            <View style={{ justifyContent: "center", paddingTop: 5, paddingBottom: 5, flexDirection: "row", borderRadius: 5, backgroundColor: "lightgray", flex: 0.5, marginLeft: 10 }}>
                                                <Text style={{ color: "black" }}>Delete</Text>
                                            </View>
                                        </View>

                                    </View>


                                </View>
                                // <Image source={element.item.uri} />

                            )
                        }}
                    />
                </ScrollView>
            </View >
        </>
    )
}

export default Friendrequest