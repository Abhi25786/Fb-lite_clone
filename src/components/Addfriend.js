import React from 'react'
import { View, FlatList, Text, Image, StyleSheet, TouchableOpacity, Button } from 'react-native'
import styles from '../css/suggestlist'
import styling from '../css/styling'
import DATA from './flatlist'


function Suggestlist() {
    return (
        <View style={styling.flat}>
            <View>
                <Text style={styles.suggesttext}>People You May Know</Text>
            </View>

            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={DATA}
                renderItem={(element) => {
                    return (

                        <View style={{ margin: 10 }}>

                            <Image source={element.item.uri} style={{ height: 200, width: 200 }} />
                            <Text style={styles.suggesttext}>{element.item.name}</Text>
                            <TouchableOpacity><View style={{ borderColor: "blue", borderWidth: 0.3, justifyContent: "center", paddingTop: 5, paddingBottom: 5, flexDirection: "row" }}>
                                <Image source={require('../assets/Images/add-contact.png')} style={{ height: 17, width: 17, marginRight: 5 }} />
                                <Text style={styles.suggesttext}>Add Friend</Text>
                            </View>
                            </TouchableOpacity>
                        </View>

                    )
                }}
            />
            <TouchableOpacity><View style={{ alignItems: "center" }}>
                <Text style={styles.suggesttext}>See All</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}

export default Suggestlist